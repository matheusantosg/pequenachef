import { Header } from '../components/Header';
import { BannerTop } from '../components/BannerTop';
import { AboutUs } from '../components/AboutUs';
import { MenuChef } from '../components/MenuChef';
import { createClient } from '../../prismicio';
import { RichText } from 'prismic-dom';
import { Feedbacks } from '../components/Feedbacks';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

interface HomeProps {
  tipbar: string;
  banners: [url: string, alt: string];
  bannersMobile: [url: string, alt: string];
  aboutChef: [avatarUrl: string, avatarAlt: string, aboutText: string];
  bannersMiddle: [url: string, alt: string];
  cardMiddle: string;
  menuCakes: [title: string, subTitle: string, link: string, items: []]
  menuCandys: [title: string, subTitle: string, link: string, items: []],
  feedbacks: [url: string, alt: string];
}

export default function Home({
  tipbar,
  banners,
  bannersMobile,
  aboutChef,
  bannersMiddle,
  cardMiddle,
  menuCakes,
  menuCandys,
  feedbacks
}: HomeProps) {
  return (
    <>
      <Header tipbar={tipbar} />
      <BannerTop banners={banners} bannersMobile={bannersMobile}/>
      <AboutUs aboutChef={aboutChef} />
      <MenuChef bannersMiddle={bannersMiddle} cardMiddle={cardMiddle} menuCakes={menuCakes} menuCandys={menuCandys}/>
      <Feedbacks feedbacks={feedbacks}/>
      <Contact />
      <Footer />
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
  const bannersMobile = data.principal_banners_mobile.map(({ banners }) => {
    return {
      url: banners.url,
      alt: banners.alt,
    };
  });
  const aboutChef = [
    {
      avatarUrl: data.about_image.url,
      avatarAlt: data.about_image.alt,
      aboutText: RichText.asHtml(data.about_text),
    },
  ];
  const bannersMiddle = data.banners_middle.map(({ banner }) => {
    return {
      url: banner.url,
      alt: banner.alt,
    };
  });
  const cardMiddle = RichText.asHtml(data.card_text);
  const menuCakes = data.menu_cakes.map((menu: any) => {
    return {
      title: RichText.asText(menu.menu_name),
      subTitle: RichText.asText(menu.menu_subtitle),
      link: menu.download_link.url,
      items: menu.items_list,
    };
  });
  const menuCandys = data.menu_candys.map((menu: any) => {
    return {
      title: RichText.asText(menu.menu_name),
      subTitle: RichText.asText(menu.menu_subtitle),
      link: menu.download_link.url,
      items: menu.items_list,
    };
  });
  const feedbacks = data.feedbacks.map(({feedback_image}) => {
    return {
      url: feedback_image.url,
      alt: feedback_image.alt
    }
  })

  return {
    props: {
      tipbar,
      banners,
      bannersMobile,
      aboutChef,
      cardMiddle,
      bannersMiddle,
      menuCakes,
      menuCandys,
      feedbacks
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
}
