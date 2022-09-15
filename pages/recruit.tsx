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
            スタッフ募集
            </h1>
            
            <div className="py-7">
            </div>
        </Layout>
    </>
    )
}

export default Home
