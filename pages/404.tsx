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
                <div style={{textAlign: "center"}}>
                    <h1>Not Found<br />404<br />ご指定のページが見つかりません</h1>
                    <p>申し訳ありませんが、ご指定のページは見つかりませんでした。入力したアドレスが間違っているか、ページが移動もしくは削除されている可能性があります。</p>
                </div>
            </Layout>
        </>
    );
}
