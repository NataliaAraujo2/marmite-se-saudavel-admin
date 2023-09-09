import React from "react";
//Icons
import {
  FaHome,
  FaInfo,
  FaShoppingBag,
  FaStore,
  FaTimes,
  FaUnlock,
  FaUser,
  FaUserCog,
} from "react-icons/fa";

//components
import NavButton from "../NavButton/NavButton";
import { MdRestaurantMenu } from "react-icons/md";
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { Container, Content } from "./styles";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const Sidebar = () => {

  const site = () => {
    window.open("https://marmitesse.web.app/");
  };

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleClick = () => {
    logout();
 
  };

  return (
    <Container>
      
      {user && (
        <Content>
          <NavButton
            Icon={FaUserCog}
            Text="Usuários"
            to="/users"
          />
        </Content>
      )}
      {!user && (
        <Content>
          <NavButton Icon={FaHome} onClick={site}  Text="Vamos conhecer o site?"  />
        </Content>
      )}
    </Container>
  );
};

export default Sidebar;