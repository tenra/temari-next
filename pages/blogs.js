//import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blogs }) {
  return (
    <Layout>
      <div>
        <ul>
          {blogs.map((blogs) => (
            <li key={blogs.id} style={{listStyle: "none"}}>
              <Link href={`/blogs/${blogs.id}`}>
                <a>
                  <div style={{display: "flex"}}>
                    <div style={{width: "100px", height: "100px", position: "relative"}}>
                        <Image
                          src={blogs.image ? blogs.image.url : '/logo.png'}
                          alt="blogs image"
                          layout="fill"
                          objectFit="contain"
                        />
                    </div>
                    <div>
                      <p>{blogs.publishedAt}</p>
                      <h2>{blogs.title}</h2>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
