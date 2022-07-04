import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import { ScrollWrapper } from '../components/lib/useScroll';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollWrapper>
      <Component {...pageProps} />
    </ScrollWrapper>
  )
}

export default MyApp
