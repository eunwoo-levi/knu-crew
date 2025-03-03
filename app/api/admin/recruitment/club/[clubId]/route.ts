import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { clubId: string } }) {
  try {
    const { clubId } = await params;

    if (!clubId) {
      return NextResponse.json(
        { success: false, message: '클럽 ID가 제공되지 않았습니다.' },
        { status: 400 },
      );
    }

    const API_URL = `${process.env.BACKEND_URL}/api/recruitment/clubs/${clubId}`;

    const response = await fetch(API_URL, { cache: 'no-store' });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          success: false,
          message: errorData.message || '동아리 가입 신청한 인원을 조회하는데 실패했습니다.',
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data: data.data }, { status: 200 });
  } catch (error) {
    console.error('[API ERROR] 동아리 가입 신청 인원 조회 중 오류 발생:', error);
    return NextResponse.json(
      {
        success: false,
        message: '서버 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
