import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Temari with Next.js!</a>
        </h1>

        <div className={styles.top_image}>
          <Image src="/top.jpg"
                  alt="temari"
                  layout="fill"
                  objectFit="cover"
          />
          <h2 className={styles.top_image_message}>
            住み慣れた我が家を一歩出て<br />
            デイサービスセンターてまりで<br />
            一日過ごされませんか
          </h2>
        </div>

        <Link href="/other">
          <a>other</a>
        </Link>

        <Link href="/form">
          <a>form</a>
        </Link>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

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
