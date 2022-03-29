import styles from "./hamburger.module.css";
import {
  Instagram,
  Facebook,
  WhatsApp,
  ArrowDropDown,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";

const Hamburger = ({ displayHamburgerMenu, setDisplayHamburgerMenu }) => {
  const navigate = useNavigate();
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);

  const handleNavigate = (path) => {
    navigate(path);
    setDisplayHamburgerMenu(false);
  };

  return (
    <div
      className={`${styles.hamburger_menu} ${
        !displayHamburgerMenu ? styles.hidden : ""
      } d-flex align-center`}
    >
      <div
        className={`${styles.close_btn}`}
        onClick={() => {
          setDisplayHamburgerMenu(false);
        }}
      >
        X
      </div>
      <ul className={`${styles.navbar}`}>
        <li
          className={`${styles.link}`}
          onClick={() => {
            handleNavigate("/ueber-uns");
          }}
        >
          Über uns
        </li>
        <li className={`${styles.link_with_submenu}`}>
          <p
            className={`${styles.link}`}
            onClick={() => {
              setDropDownMenu(!dropDownMenu);
            }}
          >
            Leistungen <ArrowDropDown className={`${styles.caret}`} />
          </p>
          {dropDownMenu ? (
            <ul className={`${styles.submenu}`}>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/haushaltsaufloesung");
                }}
              >
                Haushaltsauflösung
              </li>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/entruempelung");
                }}
              >
                Entrümpelung
              </li>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/kleine-umzuege");
                }}
              >
                Kleine Umzüge
              </li>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/gartenpflege");
                }}
              >
                Gartenpflege
              </li>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/hausreinigung");
                }}
              >
                Hausreinigung
              </li>
              <li
                className={`${styles.sub_link}`}
                onClick={() => {
                  handleNavigate("/glasreinigung");
                }}
              >
                Glasreinigung
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>
        <li
          className={`${styles.link}`}
          onClick={() => {
            handleNavigate("/kontakt");
          }}
        >
          Kontakt
        </li>
      </ul>
      <div
        className={`${styles.contact_infos} d-flex justify-between align-center`}
      >
        <a
          className={`${styles.contact_number} d-flex align-center`}
          href={`tel:${phone.number}`}
        >
          {phone.number}
        </a>
        <ul className={`${styles.social_media_groups} d-flex justify-between`}>
          <a href={instagram.link}>
            <Instagram className={`${styles.icon}`} />
          </a>
          <a href={facebook.link}>
            <Facebook className={`${styles.icon}`} />
          </a>
          <a href={whatsapp.link}>
            <WhatsApp className={`${styles.icon}`} />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
