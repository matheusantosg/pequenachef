import Head from 'next/head'
import { Header } from '../components/Header'
import { BannerTop } from '../components/BannerTop'
import { AboutUs } from '../components/AboutUs'
import { MenuChef } from '../components/MenuChef'

export default function Home() {
  return (
    <>
    <Header>
      <Head>
        <title>Pequenachef Simioni</title>
      </Head>

    </Header>
      <BannerTop />
      <AboutUs />
      <MenuChef />
    </>
  )
}
