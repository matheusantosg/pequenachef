import { TipBar } from '../TipBar';

import styles from './styles.module.scss'

type HeaderProps = {
  children: React.ReactNode
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <TipBar />
      <div className={styles.header__content}>
        <a href="/">
          <img className={styles.header__logo} src="/images/logo.png" alt="Pequena Chef Simioni" />
        </a>
        <nav className={styles.header__menu}>
          <a href="/">HOME</a>
          <a href="#sobre">SOBRE A CHEF</a>
          <a href="#cardapio">NOSSO CARDÁPIO</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
