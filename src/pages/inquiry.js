import React, { useState } from "react"
import { Meta } from "../components/meta"
import { Layout } from "../components/layout"

const InquiryPage = ({ data }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const onClickSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch("http://localhost:8000/inquiry.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, subject, message}),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <React.Fragment>
      <Meta pageTitle="お問い合わせ" pageDesc="" />
      <Layout>
        <p>返信がほしい方のみ、返信先メールアドレスをご記入ください。<br />なお、<span style={{ color:"red" }}>確認画面はございません</span>ので、入力時に送信内容をご確認ください。</p>
        <form onSubmit={onClickSubmit}>
          <div>
            <ul>
              <li>ニックネーム<span>必須</span></li>
              <li><input onChange={(e) => setName(e.target.value)} type="text" name="ニックネーム" value={name} size="30" maxLength="30" placeholder="本名以外OK" required /></li>
            </ul>
            <ul>
              <li>メールアドレス<span>任意</span></li>
              <li><input onChange={(e) => setEmail(e.target.value)} type="email" name="メールアドレス" value={email} size="30" maxLength="100" placeholder="連絡先" /></li>
            </ul>
            <ul>
              <li>タイトル<span>必須</span></li>
              <li><input onChange={(e) => setSubject(e.target.value)} type="text" name="タイトル" value={subject} size="30" maxLength="50" placeholder="お問い合わせの要件" required /></li>
            </ul>
            <ul>
              <li>ニックネーム<span>必須</span></li>
              <li><textarea onChange={(e) => setMessage(e.target.value)} name="本文" value={message} size="50" maxLength="500" placeholder="質問など" required /></li>
            </ul>
          </div>
          <input type="submit" value="送信" />
        </form>
      </Layout>
    </React.Fragment>
  )
}

export default InquiryPage

// export const Head = () => <title>Home Page</title>
