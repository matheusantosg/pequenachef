import styles from './styles.module.scss';
import Link from 'next/link'

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
            <Link href='https://www.facebook.com/pequenachefsimioni' target='_blank'>
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link href='https://wa.me/message/44U6NYXVLOJHD1' target='_blank'>
              <FaWhatsappSquare />
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/pequenachef_simioni/' target='_blank'>
              <FaInstagramSquare />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
