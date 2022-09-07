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
    if (position >= 110) {
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
    ? { boxShadow: "none" }
    : { transition: "0.5s", boxShadow: "0px 5px 10px 0px rgb(0 0 0 / 10%)"};

  const  scrollLogo: React.CSSProperties = isTop
    ? { position: "relative", top: "-200px", opacity: "0" }
    : { position: "relative", top: "0", transition: "0.5s", opacity: "1" };

  return (
    <div style={scrollStyle} className={styles.scrollMenu}>
      <div className={styles.inner}>
        <div style={scrollLogo}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src="/logo.png" alt="temari logo" layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>
        <nav>
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
  );
};
export default NavBar
