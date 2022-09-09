import { useEffect, useState } from 'react'
import 'scroll-behavior-polyfill'
import styles from '../styles/ReturnTopButton.module.scss'

const ReturnTopButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false)

    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollWindow)
        return () => {
            window.removeEventListener('scroll', scrollWindow)
        }
    }, [])

    const scrollWindow = () => {
        const top = 70  //ボタンを表示させたい位置
        let scroll = 0
        scroll = window.scrollY
        if (top <= scroll) {
            setIsButtonActive(true)
        } else {
            setIsButtonActive(false)
        }
    }

    return (
        <div
            className={isButtonActive ? styles.activeStyle : styles.normalStyle}
            onClick={returnTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 dark:text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>
            <p className="dark:text-gray-800">トップへ</p>
        </div>
    )
}

export default ReturnTopButton
