import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import common from "common";

export default function App({ Component, pageProps }: AppProps) {
  common.test();
  return <Component {...pageProps} />
}
