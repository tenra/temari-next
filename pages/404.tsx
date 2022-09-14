import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <NextSeo noindex={true} />

            <Layout>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold py-4">Not Found 404</h2>
                    <h1 className="text-4xl font-bold py-4">ご指定のページが見つかりません</h1>
                    <p className="py-4">申し訳ありませんが、ご指定のページは見つかりませんでした。入力したアドレスが間違っているか、ページが移動もしくは削除されている可能性があります。</p>
                </div>
            </Layout>
        </>
    );
}
