import Image from 'next/image'
import Link from 'next/link'
import Map from './Map.js'
import CopyLight from './CopyLight'
import styles from '../styles/Home.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto">
      <div className="py-10">
        <h2 className={styles.title_no_fade} id="access">
          <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
          アクセス
        </h2>
        <div className="sm:flex px-2">
          <div className="w-full sm:w-1/3 sm:px-3 pb-5">
            <p className="font-bold">デイサービスセンターてまり</p>
            <p>〒669-6543</p>
            <p>兵庫県美方郡香美町香住区若松521</p>
            <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">TEL</span>0796-36-3125</p>
            <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">FAX</span>0796-34-9056</p>
            <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">受付時間</span>8:00~17:00</p>
            <hr className="my-4 border-t-2" />
            <div>
              <ul className="list-disc list-inside marker:text-yellow-300">
                <li>香住インターチェンジより車で5分。</li>
                <li>JR香住駅より徒歩20分。</li>
                <li>公立香住病院に隣接。</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-2/3 sm:px-3 relative h-80">
            <Map />
          </div>
        </div>
        <div className="flex justify-end pt-5">
          <a
            className="block text-cente dark:text-black bg-yellow-300 hover:bg-yellow-400 duration-1000 w-fit py-1 px-4 rounded-3xl drop-shadow-lg"
            href="https://www.google.com/maps/search/?api=1&query=35.6425586,134.6341719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="inline mr-1" width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2z" stroke="#000000" strokeWidth="1.5"></path><path d="M9 10a1 1 0 100-2 1 1 0 000 2z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 19h3m3 0h-3m0 0v-3m0 3v3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            大きな地図で開く
          </a>
        </div>
      </div>
      <div className="border-t-2 pt-10 pb-5">
        <ul className="list-disc list-inside flex justify-around marker:text-yellow-300">
          <li className="hover:underline underline-offset-8">
            <Link href="/">
              <a>ホーム</a>
            </Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/privacy">
              <a>プライバシーポリシー</a>
            </Link>
          </li>
        </ul>
        <div className="text-center pt-10">
          <CopyLight />
        </div>
      </div>
      
      
    </footer>
  )
};
