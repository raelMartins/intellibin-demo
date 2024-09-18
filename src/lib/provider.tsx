'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'

export const Provider = ({children}:{children:ReactNode}) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position='bottom'/>
    </QueryClientProvider>
           
  )
}

//gives us access to every hook an method react query client provides
