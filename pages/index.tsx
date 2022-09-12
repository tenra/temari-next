import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { client } from "../libs/client";
import type { Blog } from "../types/blog"

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
};


const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  console.log(blogs);

  return (
    <Layout>
        <h1 className={styles.top_title_fade_in}>
          ようこそ
          <span className="font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-green-500 bg-clip-text text-transparent">
            てまり
          </span>
          のホームページへ
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-0 right-0 -z-10 w-2/3 h-3 bg-yellow-300 opacity-60"
            style={{borderRadius: '50%'}}
          >
          </span>
        </h1>
        <div style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}>
          <Slider />
        </div>

        <div className="text-center py-20 leading-9">
          <p>株式会社てまりが運営するデイサービスセンターてまりは、通所介護／介護予防通所介護の事業所指定を受けている居宅介護支援事業所です。</p>
          <p>ご自宅までの送迎や入浴介助、食事介助、機能訓練、リハビリ、レクリエーションなどのサービスを提供し、ご家族様の負担軽減や、ご利用車様の自立を支援してまいります。</p>
          <p>お互いに寄り添う事で、人の頑張り、生きざま、そこから見い出す自らの生き方、一回一回のかかわりに新しい発見がもてるような人生の”はりあい”がみつかる場になれたらと、思っております。</p>
        </div>

        <div style={{ margin: '0 calc(50% - 50vw)', width: '100vw', backgroundColor: 'rgb(248, 245, 233)' }}>
          <div className="max-w-7xl mx-auto pt-16 pb-14 relative bg-[url('../public/temari_around.png')] bg-no-repeat bg-cover leading-9 text-center dark:text-black">
            <h2 className={styles.title_fade_in}>
              <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
              てまりの理念
            </h2>
            <p>誰もが人間らしく生きたいと願っています。けれども、自分の力ではそれを実現できない人もいます。</p>
            <p>どんなに歳をとっていても、重い障がいを持っていても、その人なりの力が残されています。</p>
            <p>その力を最大限に活かして、その人が自分で人間らしく生きていけることを目指して援助をし、支えて、その願いが叶うようにするために、<span className="underline">三つの基本理念</span>を掲げます。</p>
            <div className="block sm:flex justify-between max-w-5xl mx-auto pt-8">
              <div className="sm:px-3">
                <h3 className="text-2xl font-bold py-2 w-fit relative mx-auto" style={{ fontFamily: "'游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif" }}>
                  <span className="absolute bottom-1 w-full h-2 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
                  ノーマライゼーション
                </h3>
                <p>一般の社会の中でふつうの生活を送ることができるよう</p>
              </div>
              <div className="sm:px-3">
                <h3 className="text-2xl font-bold py-2 w-fit relative mx-auto" style={{ fontFamily: "'游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif" }}>
                  <span className="absolute bottom-1 w-full h-2 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
                  人権擁護
                </h3>
                <p>あらゆる事に差別される事なく、皆と同じように生活していく</p>
              </div>
              <div className="sm:px-3">
                <h3 className="text-2xl font-bold py-2 w-fit relative mx-auto" style={{ fontFamily: "'游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif" }}>
                  <span className="absolute bottom-1 w-full h-2 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
                  生きがいの創造
                </h3>
                <p>生への意欲、明日につながる意欲、生きたいと思える心の躍りをもてるよう</p>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L120,293.3C240,299,480,309,720,304C960,299,1200,277,1320,266.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L120,128C240,128,480,128,720,106.7C960,85,1200,43,1320,21.3L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>
        */}

        <div className="max-w-7xl mx-auto pt-16 pb-14">
          <h1 className={styles.title_fade_in}>
            <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
            お知らせ
          </h1>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id} style={{listStyle: "none"}}>
                <Link href={`/blogs/${blog.id}`}>
                  <a>
                    <div style={{display: "flex"}}>
                      <div style={{width: "100px", height: "100px", position: "relative"}}>
                          <Image
                            src={blog.image ? blog.image.url : '/logo.png'}
                            alt="blogs image"
                            layout="fill"
                            objectFit="contain"
                          />
                      </div>
                      <div>
                        <p>{blog.publishedAt}</p>
                        <h2>{blog.title}</h2>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blogs">
            <a>記事一覧</a>
          </Link>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
    </Layout>
  )
}

export default Home
