import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { NextSeo } from "next-seo"

const Privacy: NextPage = () => {
    return (
        <>
            <NextSeo noindex={true} />

            <Layout>
            <h1 className={styles.title_fade_in}>プライバシーポリシー</h1>
                <p>
                株式会社てまり（以下「当社」）は、以下のとおり個人情報保護方針を定め、
個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを
徹底させることにより、個人情報の保護を推進致します。
個人情報の管理について
当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・
改ざん・漏洩などを防止するため、社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報
の厳重な管理を行います。
個人情報の利用目的について
お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内、
ご質問に対する回答として、電子メールや資料のご送付に利用いたします。
個人情報の第三者への開示・提供の禁止
当社は、お客さまよりお預かりした個人情報を適切に管理し、
次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
1.お客さまの同意がある場合。
2.お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合。
3.法令に基づき開示することが必要である場合。
法令、規範の遵守と見直し
当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、
本書内容の内容を適宜見直し、その改善に努めます。
                </p>
                <p>2022年1月18日 発行</p>
            </Layout>
        </>
    )
}

export default Privacy