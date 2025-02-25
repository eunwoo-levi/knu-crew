import { Club } from '@/src/shared';
import { useQuery } from '@tanstack/react-query';
import { getClubLists } from '../api/getClubLists';

export const useClubListsQuery = () => {
  return useQuery<Club[]>({
    queryKey: ['clubLists'],
    queryFn: getClubLists,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
