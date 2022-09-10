import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"

const Home: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />

      <Layout>
          <h1 className={styles.title_fade_in}>
            <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
            Other
          </h1>
          
          <div className="py-7 px-7">
            <Image className="rounded-lg" src="/footer.jpg" alt="temari image" width={500} height={300} objectFit="cover" />
          </div>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <p className="text-red-400">test</p>

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
    </>
  )
}

export default Home
