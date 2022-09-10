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

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx////////</code>
        </p>

        {/*
        <div style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L120,293.3C240,299,480,309,720,304C960,299,1200,277,1320,266.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L120,128C240,128,480,128,720,106.7C960,85,1200,43,1320,21.3L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>
        */}

        <div>
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
