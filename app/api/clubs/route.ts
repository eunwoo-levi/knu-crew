import { NextResponse } from 'next/server';

const API_URL = 'http://3.37.5.236:8080/api/clubs';

export async function GET() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || '동아리 목록을 불러오는데 실패했습니다.' },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data.data, { status: 200 });
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    return NextResponse.json({ message: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
