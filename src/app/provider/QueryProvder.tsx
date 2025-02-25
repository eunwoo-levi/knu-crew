'use client';

import { QueryClient,  QueryClientProviderProps } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface QueryProviderProps {
  children: ReactNode;
}

export function useQueryClientProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 데이터 신선도 유지 시간
        cacheTime: 1000 * 60 * 10, // 캐시 데이터 유지 시간
        retry: 1, // 실패 시 자동 재시도 횟수
        refetchOnWindowFocus: false, // 창에 다시 포커스 시 데이터 리페치 방지
      },
    },
  }));

  return (
    <QueryClientProviderProps client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
