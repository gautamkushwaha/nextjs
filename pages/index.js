import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head >
        <title>Ninja List | Home</title>
        <meta name="keywords" content="gautam" />
      </Head>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.title}>Hello My name is Gautam</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit provident rem nostrum dolores temporibus corrupti laboriosam alias quos nulla.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur ea error deleniti suscipit quas repudiandae nam odio debitis iusto! Laboriosam odit deserunt neque possimus nobis soluta excepturi earum iure?</p>
      <Link href="/Gautam" className={styles.btn}>Gautam List</Link>
    </>
  )
}
