import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo";
import '../styles/globals.scss'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { GA_TRACKING_ID, pageview } from '../libs/gtag';
import { ThemeProvider } from 'next-themes'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    AOS.init();
  },[]);

  return (
    <>
      <NextSeo
        title="デイサービスセンターてまり"
        description="兵庫県美方郡香美町の居宅介護支援事業所「デイサービスセンターてまり」です。"
        openGraph={{
          url: "/top.jpg",
          title: "デイサービスセンターてまり",
          description: "兵庫県美方郡香美町の居宅介護支援事業所「デイサービスセンターてまり」です。",
          images: [{
            url: "/top.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/png",
          },],
          site_name: "デイサービスセンターてまり",
        }}
        twitter={{
          handle: "blogConfig.sns.twitter.account",
          site: "blogConfig.sns.twitter.account",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
