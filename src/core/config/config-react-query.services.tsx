import React from 'react'
import {
  QueryClient,
  QueryClientProvider as QueryClientConfig,
} from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

interface Props {
  children?: React.ReactNode
}

export const QueryClientProvider = ({ children }: Props) => {
  return <QueryClientConfig client={queryClient}>{children}</QueryClientConfig>
}
