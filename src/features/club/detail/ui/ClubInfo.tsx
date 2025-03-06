import { Club } from '@/src/shared';
import Image from 'next/image';

type ClubInfoProps = {
  club: Club;
};

export default function ClubInfo({ club }: ClubInfoProps) {
  return (
    <div className='mt-6'>
      <h2 className='text-xl font-semibold'>동아리 소개 이미지</h2>
      <Image
        src='/images/knu.webp' // API 완성 시 교체 필요
        alt={`${club.name} 로고`}
        width={200}
        height={200}
        className='mt-4'
      />

      <h3 className='mt-6 text-lg font-semibold'>우리 동아리를 소개할게요!</h3>
      <p className='mt-2 leading-relaxed text-gray-700'>
        {club.name} 동아리는 다양한 활동을 진행하며, 회원 간 친목을 도모하고 있습니다. 또한,{' '}
        {club.category} 소속으로 의미 있는 활동을 펼치고 있습니다.
      </p>

      <br />

      <h3 className='mt-6 text-lg font-semibold'>우리는 이런 활동들을 해요!</h3>
      <ul className='mt-2 list-disc pl-6 leading-relaxed text-gray-700'>
        <li>정기 모임을 통해 다양한 주제에 대해 토론하고 공유합니다.</li>
        <li>연간 프로젝트 및 캠프를 통해 실무적인 경험을 쌓을 수 있습니다.</li>
        <li>신입 회원을 위한 워크샵 및 교육을 제공합니다.</li>
        <li>대외 행사 참여 및 협업 활동을 진행합니다.</li>
      </ul>
    </div>
  );
}
