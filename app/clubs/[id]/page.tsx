'use client';

import { clubList } from '@/src/features/club/model/data';
import ClubFeed from '@/src/features/club/ui/ClubFeed';
import ClubHeader from '@/src/features/club/ui/ClubHeader';
import ClubInfo from '@/src/features/club/ui/ClubInfo';
import ClubNotFound from '@/src/features/club/ui/ClubNotFound';
import type { ActiveTabTypes } from '@/src/features/club/ui/TabMenu';
import TabMenu from '@/src/features/club/ui/TabMenu';
import { Club } from '@/src/shared/type/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClubDetailPage() {
  const params = useParams();
  const id = params.id;

  const [club, setClub] = useState<Club | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTabTypes>('동아리 소개');

  useEffect(() => {
    if (id) {
      const foundClub = clubList.find((club) => club.id === Number(id));
      setClub(foundClub || null);
    }
  }, [id]);

  if (!club) return <ClubNotFound />;

  return (
    <div className='mx-auto max-w-5xl p-6'>
      {/* 동아리 기본 정보 */}
      <ClubHeader club={club} />

      {/* 탭 메뉴 */}
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 탭 컨텐츠 */}
      {activeTab === '동아리 소개' ? <ClubInfo club={club} /> : <ClubFeed />}
    </div>
  );
}
