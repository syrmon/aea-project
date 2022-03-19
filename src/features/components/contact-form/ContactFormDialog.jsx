import { useState } from "react";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import styles from "./styles.module.css";

const ContactFormDialog = ({ setStatus }) => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);

  return (
    <div
      className={`${styles.dialog_container} d-flex align-center justify-center`}
    >
      <button
        className={`${styles.close_btn}`}
        onClick={() => {
          setStatus(false);
        }}
      >
        X
      </button>
      <div className={`${styles.form_container}`}>
        <div
          className={`${styles.header} d-flex direction-column justify-center align-center`}
        >
          <h2 className={`${styles.dialog_title}`}>Kontakt form</h2>
          <div
            className={` ${styles.dialog_media_group} d-flex justify-between`}
          >
            <a href={facebook.link} className={`${styles.link}`}>
              <BsInstagram size={20} className={`${styles.dialog_icon}`} />
            </a>
            <a href={instagram.link} className={`${styles.link}`}>
              <AiFillFacebook size={20} className={`${styles.dialog_icon}`} />
            </a>
            <a href={whatsapp.link} className={`${styles.link}`}>
              <AiOutlineWhatsApp
                size={20}
                className={`${styles.dialog_icon}`}
              />
            </a>
          </div>
        </div>
        <ContactForm visibilityClass={"display-none"} />
        <div className={`${styles.data}`}>
          <a href={`emailto: ${email.address}`} className='d-flex align-center'>
            <AiOutlineMail size={20} className={`${styles.icon}`} />
            &nbsp; {email.address}
          </a>
          <a href={`tel:${phone.number} `} className='d-flex align-center'>
            <BsTelephone size={20} className={`${styles.icon}`} />
            &nbsp; {phone.number}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFormDialog;
