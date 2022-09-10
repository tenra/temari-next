import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Theme from './Theme'
import styles from '../styles/scrollMenu.module.scss'

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

export const NavBar: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 140) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const  scrollStyle: React.CSSProperties = isTop
    ? { boxShadow: "none", backgroundColor: "rgb(248 245 233)" }
    : { transition: "0.5s", boxShadow: "0px 5px 10px -5px rgb(0 0 0 / 10%)", backgroundColor: "white"};

  const  scrollLogo: React.CSSProperties = isTop
    ? { position: "relative", top: "-200px", opacity: "0" }
    : { position: "relative", top: "0", transition: "0.5s", opacity: "1" };

  const  scrollNav: React.CSSProperties = isTop
    ? { transform: "none", transition: "0.5s" }
    : { transform: "translate3d(20px,0,0)", transition: "0.5s" };

  return (
    <div style={scrollStyle} className={styles.scrollMenu}>
      <div className="dark:bg-gray-800 dark:text-gray-200">
        <div className={styles.inner}>
          <div style={scrollLogo}>
            <Link href="/">
              <div className={styles.logo}>
                <Image src="/logo.png" alt="temari logo" layout="fill" objectFit="contain" />
              </div>
            </Link>
          </div>
          <nav style={scrollNav}>
            <ul>
              <Link href="/">
                <a>
                  <li className={styles.listYellow}>ホーム</li>
                </a>
              </Link>
              <Link href="/other">
                <a>
                  <li className={styles.listYellow}>
                      other
                  </li>
                </a>
              </Link>
              <Link href="/form">
                <a>
                  <li className={styles.listYellow}>
                      お問い合わせフォーム
                  </li>
                </a>
              </Link>
              <Link href="/blogs">
                <a>
                  <li className={styles.listYellow}>
                      記事
                  </li>
                </a>
              </Link>
              <li>
                <Theme />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavBar
