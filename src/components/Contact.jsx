import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { contacts } from '../constants'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Mansi',
        from_email: form.email,
        to_email: 'mansiadhamne@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    );
  };

  return (
    <>
      <motion.div 
        variants={textVariant()} 
        className="w-full max-w-7xl mx-auto mt-8">
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
      <div className='p-12 bg-violet-300 mt-8 rounded-xl flex flex-col gap-10 md:flex-row md:gap-24 transition hover:bg-violet-400'>
        <div className='flex flex-col gap-8 md:w-1/2'>
          <p className="font-semibold text-2xl sm:text-4xl text-secondary tracking-wider">Let's Chat</p>
          <p className='text-justify text-[16px]'>Feel free to reach out if you're interested in collaborating, 
            have any questions, or just want to chat!<br className='md:block hidden'/><br className='md:block hidden'/> 
            You can connect with me through my social media channels or drop me an email, and 
            I'll get back to you as soon as I can. <br className='md:block hidden'/><br className='md:block hidden'/>
            Additionally, if you have any freelance projects in mind, don't hesitate to reach out. 
            I'm always eager to work on new and exciting ventures 
            together!
          </p>
          <ul className='list-none flex flex-row justify-center gap-12 cursor-pointer'>
            {contacts.map((contact, index) => (
              <li key={index}>
                <a href={contact.link} target='_blank'><img src={contact.image} alt="" width="40px"/></a>
              </li>
            ))}
          </ul>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 md:w-1/2'
        >
          <p className="font-semibold text-2xl sm:text-4xl text-secondary tracking-wider">Drop me a mail! &#128228;</p>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-slate-50 py-4 px-6 placeholder:text-violet-950/60 text-slate-700 text-sm rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-slate-50 py-4 px-6  placeholder:text-violet-950/60 text-slate-700 text-sm rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-slate-50 py-4 px-6  placeholder:text-violet-950/60 text-slate-700 text-sm  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className='flex justify-center mt-2'>
            <button
              type='submit'
              className=' bg-violet-950 py-3 px-12 rounded-xl outline-none w-fit text-white font-bold cursor-pointer transition hover:scale-110 hover:bg-violet-800'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")