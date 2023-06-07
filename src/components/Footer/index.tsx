import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__wrapperTop}>
        <div className={styles.footer__content}>
          <Image className={styles.header__logo} src="/images/logo-footer.png" alt="Pequena Chef Simioni" width={196} height={196} />
          <p>Rua Lorem Ipsum, 101, Centro</p>
          <p>Suzano, São Paulo - SP - Brasil</p>
          <Link href='https://wa.me/message/44U6NYXVLOJHD1' target='_blank'>+55 11 99645-7231</Link>
          <ul>
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
      </section>
      <section className={styles.footer__wrapperBottom}>
        <Image src='/images/candy.png' alt='bolo' width={390} height={208} />
      </section>
    </footer>
  )
}