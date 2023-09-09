import React from "react";
//Icons
import {
  FaHome,
  FaInfo,
  FaShoppingBag,
  FaStore,
  FaTimes,
  FaUnlock,
  FaUserCog,
} from "react-icons/fa";

//components
import NavButton from "../NavButton/NavButton";
import { MdRestaurantMenu } from "react-icons/md";
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { Container, Content } from "./styles";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const MenuMobile = ({ active }) => {
  const closeMenu = () => {
    active(false);
  };
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleClick = () => {
    logout();
    closeMenu();
  };

  return (
    <Container>
      <FaTimes onClick={closeMenu} />
      {user && (
        <Content>
          <NavButton Icon={FaHome} way="/" Text="Início" action={closeMenu} />
          <NavButton
            Icon={MdRestaurantMenu}
            way="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <NavButton Icon={FaStore} way="/store" Text="Loja" action={closeMenu} />
          <NavButton Icon={FaInfo} way="/about" Text="Sobre" action={closeMenu} />
          <NavButton
            Icon={FaShoppingBag}
            way="/"
            Text="Meus Pedidos"
            action={closeMenu}
          />
          <NavButton
            Icon={FaUserCog}
            way=""
            Text="Meus Dados"
            action={closeMenu}
          />
          <NavButton
            Icon={GrContact}
            way="/contact"
            Text="Contato"
            action={closeMenu}
          />
          <NavButton
            Icon={GrDocumentConfig}
            way="/admin/products"
            Text="Contato"
            action={closeMenu}
          />
          <NavButton
            action={handleClick}
            way="/"
            Icon={FaUnlock}
            Text="Logout"
          ></NavButton>
        </Content>
      )}
      {!user && (
        <Content>
          <NavButton Icon={FaHome} way="/" Text="Início" action={closeMenu} />
          <NavButton
            Icon={MdRestaurantMenu}
            way="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <NavButton Icon={FaStore} way="/store" Text="Loja" action={closeMenu} />
          <NavButton Icon={FaInfo} way="/about" Text="Sobre" action={closeMenu} />
          <NavButton
            Icon={GrContact}
            way="/contact"
            Text="Contato"
            action={closeMenu}
          />
        </Content>
      )}
    </Container>
  );
};

export default MenuMobile;