import { redirect } from 'next/navigation';

export default function ClubsPage() {
  redirect('/');

  return <div>메인 페이지로 이동 중...</div>;
}
