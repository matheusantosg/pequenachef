import { useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api';

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [question, setQuestion] = useState('')
  const [message, setMessage] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name,
      email,
      phone,
      question,
      message,
    }

    api('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data
    }).then((res) => {
      console.log('Resposta Ok')
      if (res.status === 200) {
        console.log('Responsta bem sucedida', res)
        setSubmit(true)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    })
  }

  return (
    <section id='contato' className={styles.contact}>
      <h2 className={styles.contact__title}>Contato</h2>
      <form className={styles.contact__form}>
        <div className={styles.contact__row}>
          <label htmlFor='name'>Nome Completo*</label>
          <input type='text' name='name' id='name' placeholder='Seu nome' onChange={(e) => {setName(e.target.value)}} />
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='email'>E-mail*</label>
          <input type='email' name='email' id='email' placeholder='Seu email' onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className={styles.contact__row}>
          <label htmlFor='phone'>Telefone para contato/whatsapp*</label>
          <input type='text' name='phone' id='phone' placeholder='Seu número de telefone' onChange={(e) => {setPhone(e.target.value)}}/>
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
          <textarea name='message' id='message' onChange={(e) => {setMessage(e.target.value)}}/>
        </div>
        <div className={styles.contact__rowButton}>
          <button type='submit' onClick={(e) => {handleSubmit(e)}}>Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
}
