import { useQuery } from '@tanstack/react-query';
import { getRecruitmentClub } from '../api/getRecruitmentClub';

export const useRecruitmentClubQuery = (clubId: number) => {
  return useQuery({
    queryKey: ['recruitmentClub'],
    queryFn: () => getRecruitmentClub(clubId),
    staleTime: 1000 * 60 * 5,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
