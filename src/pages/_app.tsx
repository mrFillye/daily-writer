import { GlobalProvider } from '@/context'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />;
    </GlobalProvider>
  )
}
