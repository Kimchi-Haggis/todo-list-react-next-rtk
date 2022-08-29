import Todo from '@components/todo'
import ToggleTheme from '@components/toggleDarkMode/ToggleTheme'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todo List App | ChangYeol Lee</title>
        <meta name="description" content="react.js, next.js, redux-toolkit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleTheme />
      <Todo />
    </div>
  )
}

export default Home;
