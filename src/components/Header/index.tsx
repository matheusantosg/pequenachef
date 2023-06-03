import { TipBar } from '../TipBar';
import Image  from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

type HeaderProps = {
  tipbar: string
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
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
