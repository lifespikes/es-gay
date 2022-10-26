import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import useSite from '../hooks/useSite';

export default function App({ Component, pageProps }: AppProps) {
  const {onHomePage, currentSite} = useSite();

  return <>
    <Head>
      <title>{onHomePage ? 'El corazón de la Web' : `${currentSite} es gay`}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>
}
