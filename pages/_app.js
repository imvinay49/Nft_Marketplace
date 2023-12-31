import { ThemeProvider } from 'next-themes';
import Script from 'next/script';


import {Navbar,Footer} from '../components';
import '/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider attribute="class">
      <div className='dark:bg-nft-dark bg-white min-h-screen'>
        <Navbar/>
        <div className='pt-65'>
        <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
      <Script src="https://kit.fontawesome.com/7b6fb66c7d.js" crossorigin="anonymous"></Script>
    </ThemeProvider>
  ) 
}
