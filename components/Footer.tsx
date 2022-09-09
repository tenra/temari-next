import Image from 'next/image'
import Link from 'next/link'
import Map from './Map.js'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-7 px-7">
        <Image className="rounded-lg" src="/footer.jpg" alt="temari image" width={500} height={300} objectFit="cover" />
      </div>
      <div className="md:flex px-2">
        <div className="w-full md:w-1/2 px-3">
          <p className="font-bold">デイサービスセンターてまり</p>
          <p>〒669-6543</p>
          <p>兵庫県美方郡香美町香住区若松521</p>
          <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">TEL</span>0796-36-3125</p>
          <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">FAX</span>0796-34-9056</p>
          <p><span className="bg-yellow-300 dark:text-gray-800 px-2 mr-2 rounded-md">受付時間</span>8:00~17:00</p>
          <hr />
          <div>
            <ul className="list-disc list-inside">
              <li>香住インターチェンジより車で5分。</li>
              <li>JR香住駅より徒歩20分。</li>
              <li>公立香住病院に隣接。</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 relative h-80">
          <Map />
        </div>
      </div>
    </footer>
  )
};
