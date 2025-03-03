export const getRecruitmentClub = async (clubId: number) => {
  try {
    if (!clubId) {
      throw new Error('클럽 ID가 필요합니다.');
    }

    const response = await fetch(`/api/admin/recruitment/club/${clubId}`, {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '동아리 목록을 불러오는데 실패했습니다.');
    }

    const data = await response.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '서버 오류가 발생했습니다.',
    };
  }
};
