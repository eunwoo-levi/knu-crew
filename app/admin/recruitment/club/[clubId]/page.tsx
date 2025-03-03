'use client';

import { useRecruitmentClubQuery } from '@/src/features/admin';

interface Applicant {
  name: string;
  studentNum: string;
  grade: number;
}

export default function RecruitmentAdminPage() {
  const clubId = 5;

  const { data: applicants, isLoading, isError, error } = useRecruitmentClubQuery(clubId);

  if (isLoading) {
    return (
      <div className='mt-10 text-center text-gray-600'>동아리 신청 현황을 불러오는 중입니다...</div>
    );
  }

  if (isError) {
    return (
      <div className='mt-10 text-center text-red-500'>
        {error instanceof Error ? error.message : '데이터 로딩 중 오류가 발생했습니다.'}
      </div>
    );
  }

  console.log('오우예#@@@@@@@@@@', applicants);

  return (
    <div className='mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-md'>
      <h1 className='mb-4 text-center text-2xl font-bold'>동아리 가입 신청 명단</h1>

      {applicants ? (
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>이름</th>
              <th className='border border-gray-300 px-4 py-2'>학번</th>
              <th className='border border-gray-300 px-4 py-2'>학년</th>
            </tr>
          </thead>
          <tbody>
            {applicants.data.map((applicant: Applicant, index: number) => (
              <tr key={index} className='text-center'>
                <td className='border border-gray-300 px-4 py-2'>{applicant.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{applicant.studentNum}</td>
                <td className='border border-gray-300 px-4 py-2'>{applicant.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center text-gray-500'>현재 가입 신청자가 없습니다.</p>
      )}
    </div>
  );
}
