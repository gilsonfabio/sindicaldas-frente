import React, { useEffect} from 'react';
import Aos from 'aos';
import '../styles/styles.css';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  
  return <Component {...pageProps} />
  }