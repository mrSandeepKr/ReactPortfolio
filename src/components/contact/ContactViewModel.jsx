import React from 'react'
import {FaFacebookMessenger} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoWhatsapp} from 'react-icons/io'

let ContactViewModel = [
    {
        title: 'Email',
        subtitle: 'sandeepkrofc@gmail.com',
        logo: <HiOutlineMail/>,
        href: 'mailto:sandeepkrofc@gmail.com'
    },
    {
        title: 'Messenger',
        subtitle: 'Sandeep Kumar',
        logo: <FaFacebookMessenger/>,
        href: 'https://www.facebook.com/profile.php?id=100013177096880'
    },
    {
        title: 'WhatsApp',
        subtitle: '+91123412214312',
        logo: <IoLogoWhatsapp/>,
        href: 'https://api.whatsapp.com/send?phone=<+91123412214312>'
    }
]

export default ContactViewModel