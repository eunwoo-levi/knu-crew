export const getClubLists = async () => {
  try {
    const response = await fetch('/api/clubs');

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '동아리 목록을 불러오는데 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);

    return [];
  }
};
