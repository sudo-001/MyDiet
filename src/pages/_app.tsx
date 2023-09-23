import BottomBar from '@/components/global/BottomBar';
import Footer from '@/components/global/Footer';
import Topbar from '@/components/global/Top';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex-1 flex flex-col overflow-y-hidden relative'>
      <Topbar />
      <Component {...pageProps} />
      <BottomBar />
      <Footer />
    </div>);
}
