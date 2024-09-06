import React from 'react';
import cn from './../style.module.scss'

const Contacts = () => {
    return (
        <ul className={cn.Contacts}>
            <li>
                <img src="contact/Location.svg" alt="location" />
                <p>Uzbekistan, Tashkent</p>
            </li>
            <li>
                <img src="contact/Call.svg" alt="phone numbers" />
                <p>+998 (99) 389 27 28</p>
                <p>+998 (93) 303 61 17</p>
            </li>
            <li>
                <img src="contact/Email.svg" alt="email" />
                <p>info@zonebase.com</p>
            </li>
        </ul>
    )
}

export default Contacts