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
            ごあいさつ
          </h1>
          <div className="max-w-3xl mx-auto py-7">
            <p>
              介護保険が始まって、在宅介護が大きく前進したかに見えましたが、本人や家族が安心できる状態になっているのでしょうか。
              介護が必要になったり、痴呆になったりしても、安心して最期まで住み慣れた地域で過ごすためにはどうしたらいいのでしょうか。その一つの試みとして当事業所を開設するに至りました。
            </p>
            <p>
              当事業所は、身近な地域の中に在り、通っていただくことで、同世代との社会的交流、仲間づくりによる孤立感の解消や介護負担の軽減等を目的とし、介護が必要になってもできるだけ自宅に住み続ける事を支援していきたいと願っております。
              同時に、地域の皆様に支えていただく事で、なおいっそうこれまでの人間関係や生活が継続でき、できるだけ自宅に住み続ける事を支援させていただけるものと確信しております。
              御利用いただく方一人一人の心や身体が何かしら浮き浮きしたのもを感じていただき、そしてお身体が少しづつ軽くなっていただけたら...
            </p>
            <p>そんなお手伝いをさせていただけたらと、職員一同心よりお待ち申し上げております。</p>
            <div className="flex flex-wrap justify-center items-center py-14">
              <div className="text-center">
                <p>代表取締役 兼 管理者</p>
                <p>天良 まり子</p>
              </div>
              <div className="w-1/2 pl-5 relative">
                <Image src="/ceo.jpg" alt="ceo image" className="rounded-full" width={250} height={250} objectFit="cover" />
              </div>
            </div>
            <div>
              <h3 className="border-l-8 border-yellow-300 text-3xl font-bold pl-3 mb-5">企業概要</h3>
              <table className="w-full text-left">
                  <thead>
                      <tr className="border-y border-gray-300 dark:border-gray-700">
                          <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>名称</th>
                          <th className="font-normal py-3 px-6">地域密着型通所介護事業所　「デイサービスセンター てまり」</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border-b border-gray-300 dark:border-gray-700">
                          <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>運営</th>
                          <td className="font-normal py-4 px-6">株式会社てまり</td>
                      </tr>
                      <tr className="border-b border-gray-300 dark:border-gray-700">
                          <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>定員</th>
                          <td className="font-normal py-4 px-6">18名</td>
                      </tr>
                      <tr className="border-b border-gray-300 dark:border-gray-700">
                          <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>営業内容</th>
                          <td className="font-normal py-4 px-6">週5日 (木曜、日曜休業) 営業時間 8:30～17:30</td>
                      </tr>
                      <tr className="border-b border-gray-300 dark:border-gray-700">
                          <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>従業員</th>
                          <td className="font-normal py-4 px-6">10名（管理者1名、看護士2名、介護士 5名 調理員 1名、事務・経理 1名）</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
