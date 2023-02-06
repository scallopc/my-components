import MenuLateral from "../menu/menuLateral";
import { ContainerMain } from "./styles";
import { Route, Switch } from "react-router-dom";
import PageDemo from "../pages/pageDemo";
import PageAvatars from "../pages/pageAvatars";
import { useEffect } from "react";

export default function MainComponents() {

  useEffect(() => {
    if (location.hash == '#/') {
      location.href = location.origin + '#/demo'
    }
  }, []);
  
  return (
    <ContainerMain>
      <MenuLateral />
      <Switch>
        <Route path="/demo" component={PageDemo} />
        <Route path="/avatar" component={PageAvatars} />
      </Switch>
    </ContainerMain>
  );
}
