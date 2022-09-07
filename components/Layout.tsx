import Head from "next/head";
import styles from '../styles/Home.module.scss'
import { Header } from './Header'
import { Footer } from './Footer'
import ReturnTopButton from './ReturnTopButton'
import ScrollMenu from './ScrollMenu'

export const appName = "Temari Next"

export const Layout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="google-site-verification" content="Q6UYAJ7gGkvWNdeXXECi6Pebh0fAeMlM8EiFB5-N2N0" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>

            <Header />
            <ScrollMenu />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
            <ReturnTopButton />
        </div>
    );
}

export default Layout;