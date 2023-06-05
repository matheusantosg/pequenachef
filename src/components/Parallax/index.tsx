import Link from 'next/link';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';

interface ParallaxProps {
  menuCakes: [title: string | any, subTitle: string | any, link: string | any, items: [] | any];
  menuCandys: [title: string | any, subTitle: string | any, link: string | any, items: [] | any];
}
export function Parallax({ menuCakes, menuCandys }: ParallaxProps) {
  return (
    <section className={styles.parallax}>
      <div className={styles.parallax__background1}>
        <div className={styles.parallax__content}>
          {menuCakes.map(({ title, subTitle, link, items }) => (
            <div className={styles.parallax__wrapperCake} key={title}>
              <h2 className={styles.parallax__title}>{title}</h2>
              <p className={styles.parallax__subtitle}>{subTitle}</p>
              <ul className={styles.parallax__list}>
                <li
                  className={styles.parallax__listItem}
                  dangerouslySetInnerHTML={{ __html: RichText.asHtml(items) }}
                />
              </ul>
              <Link href={link} className={styles.parallax__link} target='_blank'>
                Baixe o nosso <br /> Cardápio completo
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.parallax__separator}></div>
      <div className={styles.parallax__background2}>
        <div className={styles.parallax__content}>
          {menuCandys.map(({ title, subTitle, link, items }) => (
            <div className={styles.parallax__wrapperCandy} key={title}>
              <h2 className={styles.parallax__title}>{title}</h2>
              <p className={styles.parallax__subtitle}>{subTitle}</p>
              <ul className={styles.parallax__list}>
                <li className={styles.parallax__listItem} dangerouslySetInnerHTML={{ __html: RichText.asHtml(items) }} />
              </ul>
              <a href={link} className={styles.parallax__link} target='_blank'>
                Baixe o nosso <br /> Cardápio completo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
