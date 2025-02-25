export type ActiveTabTypes = '동아리 소개' | '활동 피드';

type TabMenuProps = {
  activeTab: ActiveTabTypes;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTabTypes>>;
};

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  return (
    <div className='mt-6 flex border-b'>
      <button
        className={`px-4 py-2 ${
          activeTab === '동아리 소개'
            ? 'border-b-2 border-blue-600 font-semibold text-blue-600'
            : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('동아리 소개')}
      >
        동아리 소개
      </button>

      <button
        className={`px-4 py-2 ${
          activeTab === '활동 피드'
            ? 'border-b-2 border-blue-600 font-semibold text-blue-600'
            : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('활동 피드')}
      >
        활동 피드
      </button>
    </div>
  );
}
