export const clubCategory = [
  '전체',
  '신규등록',
  '가등록',
  '문예분과',
  '사회분과',
  '종교분과',
  '체육분과',
  '학술분과',
];

export const clubList = [
  { id: 1, name: '서예꾸밈', category: '문예분과', isRecruiting: true },
  { id: 2, name: '소통의장', category: '사회분과', isRecruiting: false },
  { id: 3, name: '믿음과행동', category: '종교분과', isRecruiting: true },
  { id: 4, name: '축구사랑', category: '체육분과', isRecruiting: false },
  { id: 5, name: '과학탐구회', category: '학술분과', isRecruiting: true },
  { id: 6, name: '문학의밤', category: '문예분과', isRecruiting: false },
  { id: 7, name: '봉사단', category: '사회분과', isRecruiting: true },
  { id: 8, name: '힐링모임', category: '종교분과', isRecruiting: false },
  { id: 9, name: '농구동호회', category: '체육분과', isRecruiting: true },
  { id: 10, name: '경제스터디', category: '학술분과', isRecruiting: false },
  { id: 11, name: '연극동아리', category: '문예분과', isRecruiting: true },
  { id: 12, name: '환경지킴이', category: '사회분과', isRecruiting: false },
  { id: 13, name: '기도모임', category: '종교분과', isRecruiting: true },
  { id: 14, name: '요가클럽', category: '체육분과', isRecruiting: false },
  { id: 15, name: '역사탐방', category: '학술분과', isRecruiting: true },
  { id: 16, name: '시낭독회', category: '문예분과', isRecruiting: false },
  { id: 17, name: '청소년멘토링', category: '사회분과', isRecruiting: true },
  { id: 18, name: '명상모임', category: '종교분과', isRecruiting: false },
  { id: 19, name: '테니스클럽', category: '체육분과', isRecruiting: true },
  { id: 20, name: '프로그래밍스터디', category: '학술분과', isRecruiting: false },
  { id: 21, name: '불교기도', category: '신규등록', isRecruiting: true },
  { id: 22, name: '수리영역', category: '신규등록', isRecruiting: true },
  { id: 21, name: 'ACE', category: '신규등록', isRecruiting: true },
  { id: 22, name: '뜨람TRAME', category: '가등록', isRecruiting: true },
  { id: 23, name: '크누 모빌리티', category: '가등록', isRecruiting: false },
  { id: 24, name: 'PLEIADES', category: '가등록', isRecruiting: false },
  { id: 25, name: 'SLANG', category: '가등록', isRecruiting: false },
  { id: 26, name: 'H.P', category: '가등록', isRecruiting: false },
];

export const textColorsByCategory: { [key: string]: string } = {
  신규등록: 'text-sky-500',
  가등록: 'text-blue-800',
  문예분과: 'text-yellow-800',
  사회분과: 'text-red-400',
  종교분과: 'text-green-800',
  체육분과: 'text-indigo-400',
  학술분과: 'text-purple-600',
};
