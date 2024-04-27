"use client"

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface ReactQueryProviderProps {
  children: React.ReactNode
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 다른 웹 탭 눌렀다가 다시 홈페이지를 포커스 했을 때
          retryOnMount: true, // 마운트 되었을 때
          refetchOnReconnect: false, // 인터넷 연결이 끊긴 뒤 다시 연결 됐을 때
          retry: false, // 데이터 요청에 실패 했을 때 몇번 재시도 할건지
        },
      },
    }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
