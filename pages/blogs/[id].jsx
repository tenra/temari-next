//import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Layout from '../../components/Layout'
import { NextSeo } from "next-seo"
import Link from "next/link";
import { client } from "../../libs/client";

export default function BlogId({ blogs }) {
  const displayNone = { display: 'none' };

  return (
    <Layout>
      
      <div className={styles.blog_wrapper}>
          <div style={blogs.image ? undefined : displayNone}>
              <div style={{width: "100%", height: "450px", position: "relative"}}>
                <Image
                  src={blogs.image ? blogs.image.url : '/logo.png'}
                  alt="blogs image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
          </div>
          <h1>{blogs.title}</h1>
          <p>{blogs.publishedAt}</p>
          <p>{blogs.createdAt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blogs.body}`,
            }}
            style={{width: "100%"}}
          />
      </div>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};
