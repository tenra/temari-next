import React, { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.scss'
import Link from "next/link";

function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mvoygbyd',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'お問い合わせ頂きありがとうございます。内容によってはご返信しかねる場合がございますので、ご了承下さいませ。'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <>
      <h1 className={`${styles.title_fade_in} ${styles.width_vw}`}>
        <span className="absolute -bottom-1 -z-10 w-full h-3 bg-yellow-300 opacity-80" style={{borderRadius: '50%'}}></span>
        お問い合わせフォーム
      </h1>
      {status.info.error && (
        <div className="bg-red-100 w-fit text-center rounded-md py-3 px-3 mx-auto my-5">Error: {status.info.msg}</div>
      )}
      {
        !status.info.error && status.info.msg &&
        <p className="bg-emerald-200 w-fit text-center rounded-md py-3 px-3 mx-auto my-5 dark:text-black">
            {status.info.msg}
        </p>
      }
      <div className="bg-white rounded-lg dark:bg-gray-800 dark:border dark:border-gray-500 pt-3 pb-4 px-2 shadow-lg max-w-xl mx-auto">
        <form onSubmit={handleOnSubmit}>
          <div style={{margin: `20px auto`}}>
            <label htmlFor="name" style={{display: `block`, fontWeight: 'bold'}}>名前</label>
            <input
              id="name"
              type="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              style={{width: '100%', padding: "0.5rem"}}
              className="bg-gray-50 border-2 rounded dark:bg-gray-700 dark:border-gray-500"
              placeholder='例：山田太郎'
            />
          </div>
          <div style={{margin: `20px auto`}}>
            <label htmlFor="email" style={{display: `block`, fontWeight: 'bold'}}>メールアドレス</label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              style={{width: '100%', padding: "0.5rem"}}
              className="bg-gray-50 border-2 rounded dark:bg-gray-700 dark:border-gray-500"
              placeholder='user@example.com'
            />
          </div>
          <div style={{margin: `20px auto`,}}>
            <label htmlFor="message" style={{display: `block`, fontWeight: 'bold'}}>メッセージ</label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              style={{width: '100%', padding: "0.5rem"}}
              className="bg-gray-50 border-2 rounded dark:bg-gray-600 dark:border-gray-500"
              placeholder='500文字以内'
            />
          </div>
          <p>
            <Link href="/privacy"><a className="text-blue-700 hover:text-blue-900">プライバシーポリシー</a></Link>に同意の上、送信して下さい。
          </p>
          <div className="text-center py-5">
            <button
              type="submit"
              disabled={status.submitting}
              className="relative px-6 py-3 font-bold text-black group text-xl"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-black dark:border-gray-200 rounded"></span>
              <span className="relative">
                <svg className="w-6 h-6 stroke-black relative bottom-0.5 inline-block mr-2" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#send-diagonal_svg__clip0_2476_13290)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"></path></g><defs><clipPath id="send-diagonal_svg__clip0_2476_13290"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                {!status.submitting
                  ? !status.submitted
                  ? '送信'
                  : '送信完了'
                  : '送信中...'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default ContactForm;
