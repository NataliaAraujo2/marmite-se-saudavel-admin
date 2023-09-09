import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import elo from '../../images/Cards/elo.png'
import visa from '../../images/Cards/visa.png'
import mastercard from '../../images/Cards/matercard.png'
import { MdOutlineEmail } from "react-icons/md";
import NavButton from "../NavButton/NavButton"




const Footer = () => {
  
  const phoneNumber = `5511993954214`;
  const message = "Olá, estou entrando em contato via Whats"
  const  whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`


  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul className={styles.directContact}>
          <li className={styles.headerdirectContact}>
            CONTATO
          </li>
          <a className={styles.contentWhatsApp} href={whatsappURL}>
            <NavButton  Icon={FaWhatsapp} />
            <span>WhatsApp</span>
          </a>
          <a className={styles.contentEmail} href="/contact">
            <NavButton Icon={MdOutlineEmail} /> 
            <span>Email</span>
          </a>
        </ul>
        <ul className={styles.links}>
          <li className={styles.headerLinks}>Siga-nos nas Redes Sociais!</li>
          <li className={styles.contentFacebook}>
            <NavButton way="/contact" Icon={FaFacebook} />
          </li>
          <li className={styles.contentInstagram}>
            <NavButton way="/contact" Icon={FaInstagram} />
          </li>
          <li className={styles.contentLinkedin}>
            <NavButton way="/contact" Icon={FaLinkedin} />
          </li>
        </ul>
        <ul className={styles.cards}>
          <li className={styles.headerCards}>Bandeiras Aceitas</li>
          <li className={styles.contentVisa}><img src={visa} alt="Visa Card" /></li>
          <li className={styles.contentMastercard}><img src={mastercard} alt="Mastercard Card" /> </li>
          <li className={styles.contentElo}><img src={elo} alt="Elo Card" /></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>&copy;2023 Kay</p>
      </div>
    </footer>
  );
};

export default Footer;
