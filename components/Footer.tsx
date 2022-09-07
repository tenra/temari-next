import Image from 'next/image'
import Link from 'next/link'
import Map from './Map.js'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-7 px-7">
        <Image className="rounded-lg" src="/footer.jpg" alt="temari image" width={500} height={300} objectFit="cover" />
      </div>
      <div className="flex">
        <div className="w-1/2">
          info
        </div>
        <Map />
      </div>
    </footer>
  )
};
