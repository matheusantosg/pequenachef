import { Parallax } from '../Parallax'
import styles from './styles.module.scss'

export function MenuChef () {
  return (
    <>
    <section id="cardapio" className={styles.menuChef}>
      <div className={styles.menuChef__separator}><img src="/images/Icon-Heart.png" alt="Separator" /></div>
      <div className={styles.menuChef__wrapperTop}>
        <img className={styles.menuChef__imageTopLeft} src="/images/foto-1.png" alt="Brigadeiro" />
        <span className={styles.menuChef__cardText}>Nosso <br /><strong>cardápio</strong></span>
        <img className={styles.menuChef__imageTopRight} src="/images/foto-2.png" alt="Brigadeiro Coração" />
      </div>
      <div className={styles.menuChef__wrapperBottom}>
        <img className={styles.menuChef__imageBottomLeft} src="/images/foto-3.png" alt="Brigadeiro Coração" />
        <img className={styles.menuChef__imageBottomCenter} src="/images/foto-4.png" alt='Controle Vídeo Game' />
        <img className={styles.menuChef__imageBottomRight} src="/images/foto-5.png" alt="Doces diversos" />
      </div>
    </section>
    <Parallax />
    </>
  )
}