import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"
import Link from "next/link";
import { client } from "../libs/client";
import type { Blog } from "../types/blog"
import Date from '../components/Date'

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  
  return (
    <Layout>
      <h1 className={styles.title_fade_in}>
        <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
        お知らせ
      </h1>
      <div className="max-w-4xl mx-auto" style={{minHeight: "70vh"}}>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="list-none py-4">
              <Link href={`/blogs/${blog.id}`}>
                <a className="text-sky-700 hover:text-sky-900 dark:text-gray-200 ">
                  <div className="flex">
                    <div className="relative h-auto" style={{ minWidth: "100px"}}>
                        <Image
                          src={blog.image ? blog.image.url : '/temari_only.png'}
                          alt="blogs image"
                          layout="fill"
                          objectFit="contain"
                          objectPosition={"50% 50%;"}
                        />
                    </div>
                    <div className="">
                      <div className="text-black dark:text-gray-200">
                        <Date dateString={blog.publishedAt} />
                      </div>
                      <div className="line-clamp-1 underline underline-offset-4">
                        <h2 className="text-lg">{blog.title}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
export default Home
