import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import Slider from '../components/Slider.js'
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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Temari with Next.js!</a>
        </h1>

        <Slider />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx////////</code>
        </p>

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
