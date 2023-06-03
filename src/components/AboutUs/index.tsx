import Image from 'next/image'

import styles from './styles.module.scss'
interface AboutUsProps {
  aboutChef: [
    avatarUrl: string | any, 
    avatarAlt: string | any,
    aboutText: string | any
  ];
}
export function AboutUs({aboutChef}: AboutUsProps) {
  return (
    <section className={styles.aboutUs} id='sobre'>
      {aboutChef.map((element, index) => (
        <div key={index} className={styles.aboutUs__wrapper}>
          <Image className={styles.aboutUs__avatar} src={element.avatarUrl} alt={element.avatarAlt} width={300} height={300}/>
          <div className={styles.aboutUs__textContent} dangerouslySetInnerHTML={{__html: element.aboutText}}>
          </div>
        </div>
      ))}
    </section>
  )
}