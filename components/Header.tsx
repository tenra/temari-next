import Image from 'next/image'
import Link from 'next/link'
//import styles from '../styles/Home.module.scss'
import styles from '../styles/header.module.scss'
import React, {useState} from "react"
import Theme from './Theme'

export const Header: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div>
          <p>兵庫県美方郡香美町のデイサービスセンターてまり</p>
          <Link href="/">
            <div className={styles.header_logo}>
              <Image src="/logo.png" alt="temari logo" layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_phone}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className={styles.header_phone_right}>
            <p className={styles.header_phone_number}>0796-36-3125</p>
            <p>受付時間 8:00 ~ 17:30</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/other">
                  <a>other</a>
                </Link>
              </li>
              <li>
                <Link href="/form">
                  <a>form</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>記事</a>
                </Link>
              </li>
              <li>
                <Theme />
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.humburger} onClick={() => menuFunction()}>
          <span className={openMenu ? styles.open : undefined}></span>
          <span className={openMenu ? styles.open : undefined}></span>
          <p className={openMenu ? styles.open : undefined}>Menu</p>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <a>
                <p className={styles.mainTitle}>ホーム</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/other">
            <a>
              <p className={styles.mainTitle}>other</p>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/form">
            <a>
              <p className={styles.mainTitle}>form</p>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
            <a>
              <p className={styles.mainTitle}>記事</p>
            </a>
            </Link>
          </li>
          <li>
              <Theme />
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
