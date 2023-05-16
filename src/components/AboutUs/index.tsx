import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__wrapper}>
        <img className={styles.aboutUs__avatar} src="/images/avatar.png" alt="Geovanna Simioni" />
        <div className={styles.aboutUs__textContent}>
          <h1 className={styles.aboutUs__title}>Geovanna Simioni</h1>
          <p className={styles.aboutUs__text}>
            Prazer, sou Geovanna Simioni, a Pequena Chef <br />
            Sou confeiteira, formada em gastronomia desde 2014. Confeitaria é minha paixão e meu lugar preferido é dentro da cozinha.
          </p>
        </div>
      </div>
    </section>
  )
}