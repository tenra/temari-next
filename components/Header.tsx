import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import React, {useState} from "react"
import Theme from './Theme'
import { Phone, Mail } from 'iconoir-react'

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
              <Image src="/logo.png" className={styles.header_logo} alt="temari logo" layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>
        <div className="hidden sm:block relative top-2">
          <div className={styles.header_phone}>
            <Phone className="h-10 w-10 relative bottom-1" />
          </div>
          <div className="inline-block">
            <p className="text-2xl">0796-36-3125</p>
            <p>受付時間 8:00 ~ 17:30</p>
          </div>
          <Link href="/form">
            <a className="block text-cente dark:text-black bg-yellow-300 hover:bg-yellow-400 duration-1000 w-full mt-2 py-1 pl-3 pr-2 rounded-3xl drop-shadow-lg">
              <Mail className="inline-block mr-1 relative bottom-0.5" />
              お問い合わせフォーム
            </a>
          </Link>
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
              <p className={styles.mainTitle}>お知らせ</p>
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
