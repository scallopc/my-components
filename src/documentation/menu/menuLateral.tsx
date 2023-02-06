import { ContainerMenuLateral, MenuContainer } from "./styles";
import { HashRouter } from "react-router-dom";
import MenuRoutes from "../../components/menuRoutes/menuRoutes";
import { faUser } from "@fortawesome/free-regular-svg-icons";


export default function MenuLateral() {

  return (
    <HashRouter>
      <ContainerMenuLateral>
        <MenuContainer>
          <MenuRoutes title="Demo" to='/demo' />
          <MenuRoutes title="Avatar" to='/avatar' />
        </MenuContainer>
      </ContainerMenuLateral>
    </HashRouter>
  );
}
