import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="デイサービスセンターてまり"
        description="兵庫県美方郡香美町の居宅介護支援事業所「デイサービスセンターてまり」です。"
        openGraph={{
          url: "blogConfig.url",
          title: "blogConfig.title",
          description: "blogConfig.desc",
          images: [
            {
              url: "blogConfig.ogp.images[0].url",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          site_name: "blogConfig.title",
        }}
        twitter={{
          handle: "blogConfig.sns.twitter.account",
          site: "blogConfig.sns.twitter.account",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
