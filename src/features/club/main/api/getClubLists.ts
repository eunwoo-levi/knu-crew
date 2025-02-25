export const getClubLists = async () => {
  try {
    const response = await fetch('https://3.37.5.236:8080/api/clubs');

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '동아리 목록을 불러오는데 실패했습니다.');
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
