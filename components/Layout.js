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
