import { TipBar } from '../TipBar';
import Image  from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

import styles from './styles.module.scss'
import { useWindowSize } from '../../Hooks/useMedia';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

type HeaderProps = {
  tipbar: string
}

export function Header(props: HeaderProps) {
  const { width } = useWindowSize()
  const isMobile = Number(width) < 980
  const [isActive, setActive] = useState(false)
  const [sticky, setSticky] = useState(false)

  function isSticky() {
    window.scrollY >= 50 ? setSticky(true) : setSticky(false)
  }

  if (typeof window !== 'undefined')
  window.addEventListener('scroll', isSticky)
  
  return isMobile ? 
    <header className={styles.header__mobile}>
      <TipBar tipbar={props.tipbar} />
      <div className={styles.header__contentMobile}>
        <button onClick={() => setActive(!isActive)} className={styles.header__menuBtn}>
          <Image src='/images/menu-mobile.png' width={47} height={47} alt='Menu Mobile' />
        </button>
        <nav className={isActive ? styles.header__menuMobileActive : styles.header__menuMobile}>
          <Link href="/">HOME</Link>
          <Link href="#sobre">SOBRE A CHEF</Link>
          <Link href="#cardapio">NOSSO CARDÁPIO</Link>
          <Link href="#contato">CONTATO</Link>
          <FiX onClick={() => setActive(!isActive)} color='#737380' className={styles.header__closeIcon}/>
        </nav>
        <Link href="/" className={styles.header__logo}>
          <Image src="/images/logo.png" alt="Pequena Chef Simioni" width={93} height={93} />
        </Link>
        <ul className={styles.header__socialList}>
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
    </header> : (
    <header className={sticky ? styles.headerSticky : styles.header}>
      <TipBar tipbar={props.tipbar} />
      <div className={styles.header__content}>
        <Link href="/">
          <Image className={styles.header__logo} src="/images/logo.png" alt="Pequena Chef Simioni" width={112} height={112} />
        </Link>
        <nav className={styles.header__menu}>
          <Link href="/">HOME</Link>
          <Link href="#sobre">SOBRE A CHEF</Link>
          <Link href="#cardapio">NOSSO CARDÁPIO</Link>
          <Link href="#contato">CONTATO</Link>
        </nav>
      </div>
    </header>
  );
}
