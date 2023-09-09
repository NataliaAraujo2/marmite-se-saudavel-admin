import { React, useState } from "react";
import { NavLink } from "react-router-dom";
//CSS
import styles from "./Navbar.module.css";
//Images
import logo from "../../images/logo.png";
//Components
import NavButton from "../NavButton/NavButton";
import MenuMobile from "../MenuMobile/MenuMobile";
//Icons
import {
  FaBars,
  FaHome,
  FaInfo,
  FaLock,
  FaPen,
  FaShoppingBag,
  FaStore,
  FaUnlock,
  FaUserCog,
} from "react-icons/fa";
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
//hook
import { useAuthentication } from "../../hooks/useAuthentication";
//context
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const showMenuMobile = () => setMenuMobile(!menuMobile);

  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  const date =  new Date().toUTCString();
    



  return (
    <div className={styles.navbar}>
      {user && (
        <>
          <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.brand} />
          </div>
          <div className={styles.date}>
            <p>{date}</p>
          </div>
          <div className={styles.logout}>
            <NavButton
              onClick={logout}
              to="/"
              Icon={FaUnlock}
              Text="Logout"
            ></NavButton>
          </div>
        </>
      )}

      {!user && (
        <>
          <div className={styles.navbar}>
            <div className={styles.brand}>
              <img src={logo} alt="logo" className={styles.brand} />
            </div>
            <h1>Autentique-se para entrar!</h1>
            <div className={styles.date}>
              <p>{date}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
