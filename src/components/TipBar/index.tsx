import styles from './styles.module.scss';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export function TipBar() {
  return (
    <div className={styles.tipBar}>
      <div className={styles.tipBar__container}>
        <p className={styles.tipBar__text}>
          Seja muito bem vindo à <b>Pequena Chef Simioni!</b> Fique à vontade de
          me contatar!
        </p>
        <ul className={styles.tipBar__socialList}>
          <li>
            <a href='https://www.facebook.com/pequenachefsimioni' target='_blank'>
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href='https://wa.me/message/44U6NYXVLOJHD1' target='_blank'>
              <FaWhatsappSquare />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/pequenachef_simioni/' target='_blank'>
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
