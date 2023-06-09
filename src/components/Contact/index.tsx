import styles from './styles.module.scss';

export function Contact() {
  return (
    <section id='contato' className={styles.contact}>
      <h2 className={styles.contact__title}>Contato</h2>
      <form className={styles.contact__form}>
        <div className={styles.contact__row}>
          <label htmlFor='name'>Nome Completo*</label>
          <input type='text' name='name' id='name' placeholder='Seu nome' />
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='email'>E-mail*</label>
          <input type='email' name='email' id='email' placeholder='Seu email' />
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='phone'>Telefone para contato/whatsapp*</label>
          <input type='text' name='phone' id='phone' placeholder='Seu número de telefone' />
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='question'>Assunto*</label>
          <select name="question" id="question">
            <option value="">Selecione</option>
            <option value="">Pergunta 1</option>
            <option value="">Pergunta 2</option>
            <option value="">Pergunta 3</option>
          </select>
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='message'>Mensagem*</label>
          <textarea name='message' id='message' />
        </div>
        <div className={styles.contact__rowButton}>
          <button type='submit'>Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
}
