import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { NextSeo } from "next-seo"
import { Link as ScrollLink } from 'react-scroll';

const Home: NextPage = () => {
    return (
    <>
        <NextSeo noindex={true} />

        <Layout>
            <div style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}>
                <div className="w-full h-96 bg-[url('/recruit.jpg')] bg-cover bg-center sm:bg-[center_bottom_30rem] bg-no-repeat sm:bg-repeat">
                    <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
                        <h3 className="text-4xl text-white italic drop-shadow-md pb-2">Staff</h3>
                        <h1 className={styles.title_fade_in_white}>
                            <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
                            スタッフ募集
                        </h1>
                    </div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto py-7">
                <p className="pb-12">デイサービスセンターてまりでは、一緒に働いて頂けるスタッフを募集しております。</p>
                <div className="sm:flex">
                    <div className="w-full sm:w-4/5 sm:pr-10">
                        <div id="kaigo" className="pb-16">
                            <h3 className="border-l-8 border-yellow-300 text-3xl font-bold pl-3 mb-5">介護職員</h3>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-y border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>資格</th>
                                        <th className="font-normal py-3 px-6">未経験可、有資格者優遇</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>給与</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>時給: 1,000円</p>
                                            <p>処遇改善加算手当: 10,000円</p>
                                            <p>資格手当: 5,000円</p>
                                            <p>賞与: 年2回</p>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>勤務時間</th>
                                        <td className="font-normal py-4 px-6">8:30 ~ 17:30</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>休日</th>
                                        <td className="font-normal py-4 px-6">木曜、日曜、他シフト制</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>待遇</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>交通費支給: 月上限20,000円</p>
                                            <p>各種社会保障</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="kango" className="pb-16">
                            <h3 className="border-l-8 border-yellow-300 text-3xl font-bold pl-3 mb-5">看護職員</h3>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-y border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>資格</th>
                                        <th className="font-normal py-3 px-6">看護士、准看護士</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>給与</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>時給: 1,000円</p>
                                            <p>業務手当: 10,000円</p>
                                            <p>資格手当: 5,000円</p>
                                            <p>賞与: 年2回</p>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>勤務時間</th>
                                        <td className="font-normal py-4 px-6">8:30 ~ 17:30</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>休日</th>
                                        <td className="font-normal py-4 px-6">木曜、日曜、他シフト制</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>待遇</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>交通費支給: 月上限20,000円</p>
                                            <p>各種社会保障</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="tyouri">
                            <h3 className="border-l-8 border-yellow-300 text-3xl font-bold pl-3 mb-5">調理員</h3>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-y border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>資格</th>
                                        <th className="font-normal py-3 px-6">未経験可、有資格者優遇</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>給与</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>時給: 960円</p>
                                            <p>賞与: 年2回</p>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>勤務時間</th>
                                        <td className="font-normal py-4 px-6">8:30 ~ 13:30</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>休日</th>
                                        <td className="font-normal py-4 px-6">木曜、日曜、他シフト制</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700">
                                        <th scope="row" className="dark:text-black font-normal py-3 px-6 w-1/3" style={{ backgroundColor: 'rgb(248, 245, 233)' }}>待遇</th>
                                        <td className="font-normal py-4 px-6">
                                            <p>交通費支給: 月上限20,000円</p>
                                            <p>各種社会保障</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <aside className="hidden sm:block sticky top-24 w-1/5 h-fit">
                        <div className="">
                            <h3 className="border-l-8 border-yellow-300 text-2xl font-bold pl-3 mb-5">メニュー</h3>
                            <ul>
                                <ScrollLink to="kaigo" smooth={true} duration={1000} offset={-100}>
                                    <li className="border-y border-gray-300 dark:border-gray-700 py-4 px-2 text-sky-700 hover:text-sky-900 cursor-pointer">介護職員</li>
                                </ScrollLink>
                                <ScrollLink to="kango" smooth={true} duration={1000} offset={-100}>
                                    <li className="border-b border-gray-300 dark:border-gray-700 py-4 px-2 text-sky-700 hover:text-sky-900 cursor-pointer">看護職員</li>
                                </ScrollLink>
                                <ScrollLink to="tyouri" smooth={true} duration={1000} offset={-100}>
                                    <li className="border-b border-gray-300 dark:border-gray-700 py-4 px-2 text-sky-700 hover:text-sky-900 cursor-pointer">調理員</li>
                                </ScrollLink>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    </>
    )
}

export default Home
