import { Parallax } from '../Parallax';
import Image from 'next/image';
import styles from './styles.module.scss';

interface MenuChefProps {
  bannersMiddle: [url: string | any, alt: string | any];
  cardMiddle: string;
  menuCakes: [title: string, subTitle: string, link: string, items: []];
  menuCandys: [title: string, subTitle: string, link: string, items: []];
}

export function MenuChef({
  bannersMiddle,
  cardMiddle,
  menuCakes,
  menuCandys
}: MenuChefProps) {
  return (
    <>
      <section id='cardapio' className={styles.menuChef}>
        <div className={styles.menuChef__separator}>
          <img src='/images/Icon-Heart.png' alt='Separator' />
        </div>
        <div className={styles.menuChef__wrapper}>
          <div
            className={styles.menuChef__cardText}
            dangerouslySetInnerHTML={{ __html: cardMiddle }}
          ></div>
          {bannersMiddle.map((banner, index) => (
            <Image
              key={index}
              src={banner.url}
              alt={banner.alt ? banner.alt : 'banner'}
              width={300}
              height={300}
            />
          ))}
        </div>
      </section>
      <Parallax menuCakes={menuCakes} menuCandys={menuCandys}/>
    </>
  );
}
