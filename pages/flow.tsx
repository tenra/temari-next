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
            1日の流れ
          </h1>
          <p className="text-right">※時間は目安です。</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-3">
            <div>
              <h3 className="text-2xl font-bold text-center">8:15〜</h3>
              <p>各家にお迎えに伺います。</p>
              <Image className="rounded-lg" src="/flow/flow1.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">8:45〜</h3>
              <p>皆さまとお顔を合わせ、朝のご挨拶、体温・血圧・脈拍等のチェックを行います。</p>
              <Image className="rounded-lg" src="/flow/flow2.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">9:30〜</h3>
              <p>機能訓練・入浴	入浴・グループワーク・脳力活性化トレーニング（パズル・計算ドリル・書写クラフト・塗り絵等）・運動</p>
              <Image className="rounded-lg" src="/flow/flow3.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">11:30〜</h3>
              <p>口腔体操・発声練習で口腔機能を高める体操をします。</p>
              <Image className="rounded-lg" src="/flow/flow4.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">11:45〜</h3>
              <p>昼食をその方に合った調理方法で提供させて頂きます。</p>
              <Image className="rounded-lg" src="/flow/flow5.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">&nbsp;</h3>
              <p>口腔ケア（歯磨き・うがい）で口腔内を清潔にします。食後しばらく休みます。</p>
              <Image className="rounded-lg" src="/flow/flow6.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">14:00〜</h3>
              <p>ラジオ体操、ウォーミングアップ、負荷をつけた体操、筋力トレーニング、リハビリを取り入れたレクリエーションを行います。</p>
              <Image className="rounded-lg" src="/flow/flow7.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">15:00〜</h3>
              <p>歓談をしながらおやつを召し上がっていただきます。</p>
              <Image className="rounded-lg" src="/flow/flow8.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">15:45〜16:30</h3>
              <p>各家にお送りいたします。</p>
              <Image className="rounded-lg" src="/flow/flow9.png" alt="temari image" width={300} height={250} objectFit="cover" />
            </div>
          </div>

          <div className="border-double border-4 border-sky-600 rounded-md py-4 px-3 mx-auto my-10 w-fit">
            <h3 className="text-2xl font-bold text-center">⭐ご利用時に持ってきて頂く物</h3>
            <div className="sm:flex">
              <div className="py-3">
                <ul className="list-disc list-inside">
                  <li>バスタオル２枚（内１枚はスポーツタオル大のもの）</li>
                  <li>タオル２枚（洗身用）</li>
                  <li>着替え衣類、服薬</li>
                  <li>歯ブラシのみ</li>
                  <li>ナイロン袋（洗濯物入れ）</li>
                  <li>履き慣れた上履き</li>
                </ul>
                <p>※持ち物には記名をお願いします。</p>
              </div>
              <Image className="rounded-lg" src="/flow/flow10.png" alt="temari image" width={300} height={280} objectFit="cover" />
            </div>
          </div>

      </Layout>
    </>
  )
}

export default Home
