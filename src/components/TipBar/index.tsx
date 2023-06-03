import styles from './styles.module.scss';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

interface TipBarProps {
  tipbar: string
}
export function TipBar({tipbar}: TipBarProps) {
  return (
    <div className={styles.tipBar}>
      <div className={styles.tipBar__container} >
        <div className={styles.tipBar__text} dangerouslySetInnerHTML={{__html: tipbar}}/>
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
