import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import React, {useState} from "react"
import Theme from './Theme'
import { Phone } from 'iconoir-react'

export const Header: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div>
          <p className="pt-2 text-sm sm:text-base">兵庫県美方郡香美町のデイサービスセンターてまり</p>
          <Link href="/">
            <div className="relative w-80 lg:w-96 h-24 lg:h-28 z-50 cursor-pointer">
              <Image src="/logo.png" alt="temari logo" layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_phone}>
            <Phone className="h-10 w-10" />
          </div>
          <div className={styles.header_phone_right}>
            <p className={styles.header_phone_number}>0796-36-3125</p>
            <p>受付時間 8:00 ~ 17:30</p>
          </div>
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
              <p className={styles.mainTitle}>お問い合わせフォーム</p>
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
