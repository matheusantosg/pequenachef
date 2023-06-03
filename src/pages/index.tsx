import Head from 'next/head'
import { Header } from '../components/Header'
import { BannerTop } from '../components/BannerTop'
import { AboutUs } from '../components/AboutUs'
import { MenuChef } from '../components/MenuChef'
import { createClient } from '../../prismicio';
import { RichText } from 'prismic-dom';

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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const response = await client.getSingle('homepage');
  
  const tipbar = response.data.tipbar.map((tipbar) => ({
    text: tipbar.text_tipbar[0].text
  }))

  console.log(tipbar)
  return {
    props: { tipbar },
  };
}