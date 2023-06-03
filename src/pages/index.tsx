import { Header } from '../components/Header';
import { BannerTop } from '../components/BannerTop';
import { AboutUs } from '../components/AboutUs';
import { MenuChef } from '../components/MenuChef';
import { createClient } from '../../prismicio';
import { RichText } from 'prismic-dom';

interface HomeProps {
  tipbar: string
  banners: [ 
    url: string,
    alt: string
  ]
}

export default function Home({tipbar, banners}: HomeProps) {
  return (
    <>
      <Header tipbar={tipbar} />
      <BannerTop banners={banners}/>
      <AboutUs />
      <MenuChef />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const response = await client.getAllByType('homepage');
  const tipbar = RichText.asHtml(response[0].data.tipbar_text)

  const banners = response[0].data.principal_banners.map(({banners}) => {
    return {
      url: banners.url,
      alt: banners.alt
    }
  })

  return {
    props: { tipbar, banners },
    revalidate: 60 * 60 * 24 //24 hours
  };
}
