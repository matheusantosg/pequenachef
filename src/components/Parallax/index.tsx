import styles from './styles.module.scss';

export function Parallax() {
  return (
    <section className={styles.parallax}>
      <div className={styles.parallax__background1}>
        <div className={styles.parallax__content}>
          <div className={styles.parallax__wrapperCake}>
            <h2 className={styles.parallax__title}>CARDÁPIO BOLO</h2>
            <p className={styles.parallax__subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus semper 
              tristique pellentesque fringilla urna, tortor vestibulum, ipsum, nullam.
            </p>
            <ul className={styles.parallax__list}>
              <li className={styles.parallax__listItem}>
                <h3>Lorem Ipsum ITEM 1</h3>
                <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
              </li>
              <li className={styles.parallax__listItem}>
                <h3>Lorem Ipsum ITEM 1</h3>
                <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
              </li>
              <li className={styles.parallax__listItem}>
                <h3>Lorem Ipsum ITEM 1</h3>
                <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
              </li>
            </ul>
            <a href="" className={styles.parallax__link}>
              Baixe o nosso <br /> Cardápio completo
            </a>
          </div>
        </div>
      </div>
      <div className={styles.parallax__separator}></div>
      <div className={styles.parallax__background2}>
        <div className={styles.parallax__content}>
          <div className={styles.parallax__wrapperCandy}>
              <h2 className={styles.parallax__title}>CARDÁPIO BOLO</h2>
              <p className={styles.parallax__subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus semper 
                tristique pellentesque fringilla urna, tortor vestibulum, ipsum, nullam.
              </p>
              <ul className={styles.parallax__list}>
                <li className={styles.parallax__listItem}>
                  <h3>Lorem Ipsum ITEM 1</h3>
                  <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
                </li>
                <li className={styles.parallax__listItem}>
                  <h3>Lorem Ipsum ITEM 1</h3>
                  <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
                </li>
                <li className={styles.parallax__listItem}>
                  <h3>Lorem Ipsum ITEM 1</h3>
                  <p>Cream, coffe beans, vanilla................ <span>R$ 500,00</span></p>
                </li>
              </ul>
              <a href="" className={styles.parallax__link}>
                Baixe o nosso <br /> Cardápio completo
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
