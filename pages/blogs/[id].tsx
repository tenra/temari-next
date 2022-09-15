import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { NextSeo } from "next-seo"
import Link from "next/link";
import { client } from "../../libs/client";
import type { Blog } from "../../types/blog"
import Date from '../../components/Date'

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};

type Props = {
  blogs: Blog;
};

//export default function BlogId({ blogs }) {
const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  const displayNone = { display: 'none' };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
          <div className="text-right">
            <Date dateString={blogs.publishedAt} />
          </div>
          <h1 className="text-4xl font-bold py-3">{blogs.title}</h1>
          <div style={blogs.image ? undefined : displayNone}>
              <div className={'image-container'}>
                <Image
                  src={blogs.image ? blogs.image.url : '/logo.png'}
                  alt="blogs image"
                  layout="fill"
                  className={'image'}
                />
              </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blogs.body}`,
            }}
            className="py-3"
            style={{width: "100%"}}
          />
      </div>
    </Layout>
  );
}
export default Home
