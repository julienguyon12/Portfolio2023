import React, { useRef, useState, useEffect, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Contact.scss';
import computer from '../Assets/computer.png';

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [isSend, setIsSend] = useState('none');

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsSend('none');
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isSend]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hkzvf12',
        'template_x8zjycq',
        form.current,
        'VBnRiFm3j9Ehja2Xa'
      )
      .then(
        () => {
          setIsSend('send');
        },
        () => {
          setIsSend('error');
        }
      );
  };
  return (
    <section ref={ref} className='contact'>
      <div className='container'>
        <div className='left'>
          <form ref={form} onSubmit={sendEmail}>
            <h2>Me Contacter</h2>
            <input
              placeholder='Votre Nom'
              type='text'
              name='fullName'
              id='name'
            ></input>
            <input
              type='email'
              placeholder='NomPrenom@exemple.com'
              name='email'
              id='email'
              required
            ></input>
            <textarea
              placeholder='Votre Message'
              rows={10}
              name='message'
              id='message'
              required
            ></textarea>
            <button type='submit'> Envoyer</button>
            {isSend === 'send' ? (
              <button className='send'>Message envoyé</button>
            ) : isSend === 'error' ? (
              <button className='error'>Message non envoyé</button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
        <div className='right'>
          <img src={computer} alt='' />
        </div>
      </div>
    </section>
  );
});

export default Contact;
