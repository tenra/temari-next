import Head from "next/head";
import styles from '../styles/Home.module.scss'
import Header from './Header.js'
import Footer from './Footer.js'

export const appName = "Temari Next"

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="google-site-verification" content="Q6UYAJ7gGkvWNdeXXECi6Pebh0fAeMlM8EiFB5-N2N0" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>

            <Header />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
