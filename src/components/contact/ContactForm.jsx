import React from 'react'

const ContactForm = () => {
  return (
    <form className="contact__form" action = "">
      <input type = 'text' name = 'name' placeholder='Fill Your Name' required />
      <input type = 'email' name = 'email' placeholder='Your Email' required />
      <textarea name = 'message' rows = '7' placeholder='Your Message' required></textarea>
      <button type = 'submit' className='btn btn-primary'>Send Message</button>
    </form>
  )
}

export default ContactForm