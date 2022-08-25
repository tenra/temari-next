import React, { useState } from 'react'
import axios from 'axios'

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
    <main style={{margin: `0 auto`, width: 500, padding: `1.45rem 1.0875rem`}} >
      <h1 style={{textAlign: 'center'}}>お問い合わせフォーム</h1>
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
            placeholder='500文字以内'
          />
        </div>
        <div>
        <div style={{textAlign: 'center'}}>
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
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {
        !status.info.error && status.info.msg &&
        <p style={{textAlign: 'center', margin: `20px auto`, background: 'rgb(178 252 224)', borderRadius: '7px', padding: "0.5rem"}}>
            {status.info.msg}
        </p>
      }
    </main>
  )
}
export default ContactForm;
