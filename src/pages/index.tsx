import { Header } from '../components/Header';
import { BannerTop } from '../components/BannerTop';
import { AboutUs } from '../components/AboutUs';
import { MenuChef } from '../components/MenuChef';
import { createClient } from '../../prismicio';
import { RichText } from 'prismic-dom';

interface HomeProps {
  tipbar: string;
  banners: [url: string, alt: string];
  aboutChef: [avatarUrl: string, avatarAlt: string, aboutText: string];
}

export default function Home({ tipbar, banners, aboutChef }: HomeProps) {
  return (
    <>
      <Header tipbar={tipbar} />
      <BannerTop banners={banners} />
      <AboutUs aboutChef={aboutChef} />
      <MenuChef />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const response = await client.getAllByType('homepage');
  const data = response[0].data;

  const tipbar = RichText.asHtml(data.tipbar_text);
  const banners = data.principal_banners.map(({ banners }) => {
    return {
      url: banners.url,
      alt: banners.alt,
    };
  });
  const aboutChef = [{
    avatarUrl: data.about_image.url,
    avatarAlt: data.about_image.alt,
    aboutText: RichText.asHtml(data.about_text),
  }];

  return {
    props: {
      tipbar,
      banners,
      aboutChef
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
}
