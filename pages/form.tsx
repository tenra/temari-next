import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import ContactForm from "../components/contactForm.js"
import { NextSeo } from "next-seo";

export default function App() {
  return (
    <>
      <NextSeo
        title="お問い合わせ - デイサービスセンターてまり"
        description="デイサービスセンターてまりへのお問い合わせは、こちらのフォームよりお願い致します。"
      />

      <Layout>
        <div>
          <ContactForm />
        </div>
      </Layout>
    </>
  )
}
