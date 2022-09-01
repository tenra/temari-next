import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Map from './Map.js'

const Footer = () => (
  <footer className={styles.footer}>
    <Map />

    <div>
      <Image className={styles.footer_img} src="/footer.jpg" alt="temari image" width={500} height={300} objectFit="cover" />
    </div>
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </div>
  </footer>
);

export default Footer;
