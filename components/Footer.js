import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <Image className={styles.footer_img} src="/footer.jpg" width={500} height={300} objectFit="cover" />
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
