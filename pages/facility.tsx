import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"

const Home: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />

      <Layout>
          <h1 className={styles.title_fade_in}>
            <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
            施設の様子
          </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-7">
            <Image className="rounded-lg" src="/facility/DSC_0219.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0227.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0181.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0223.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0212.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0214.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0186.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0197.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0202.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
            <Image className="rounded-lg" src="/facility/DSC_0205.JPG" alt="temari image" width={500} height={300} objectFit="cover" />
          </div>

          {/*<p>
            食べることは生きることの楽しみの一つ専門の調理員が考えた四季折々の食材を取り入れたメニューを、施設内の厨房で一食一食手作りしています食前の口腔体操、食後の口腔ケアもお手伝いします。
          </p>*/}
      </Layout>
    </>
  )
}

export default Home
