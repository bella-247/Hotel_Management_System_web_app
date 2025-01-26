import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLoading } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";


const Contact = () => {
  return (
    <main>
        <div>Contact</div>
        <div style={{ width: "100%", height: "400px" }}>
            <iframe className ="embeded-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.408835417171!2d38.73533137142657!3d9.024295166778819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d5dbad059d%3A0xad5d3400ac4c10ea!2sDibaba%20Metasebiya%20hotel!5e1!3m2!1sen!2set!4v1737760559302!5m2!1sen!2set" width="600" height="450" style={{border:0}} allowFullScreen="True" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  ></iframe>
            
        </div>

    </main>
  )
}

export default Contact;