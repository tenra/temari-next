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
      <h1 className={styles.title_fade_in}>お問い合わせフォーム</h1>
      {status.info.error && (
        <div className="bg-red-100 w-fit text-center rounded-md py-3 px-3 mx-auto my-5">Error: {status.info.msg}</div>
      )}
      {
        !status.info.error && status.info.msg &&
        <p className="bg-emerald-200 w-fit text-center rounded-md py-3 px-3 mx-auto my-5">
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
                  style={{fontSize: '1.25rem', color: 'white', background: '#2b7df3', border: "#2b7df3", borderRadius: '7px', padding: "0.25rem 0.75rem"}}>
              {!status.submitting
                  ? !status.submitted
                  ? '送信'
                  : '送信完了'
                  : '送信中...'}
              </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default ContactForm;
