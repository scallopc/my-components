import MenuLateral from "../menu/menuLateral";
import { ContainerMain } from "./styles";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import PageInputs from "../pages/pageInputs";
import PageButtons from "../pages/pageButtons";
import PageSelect from "../pages/pageSelects";
import PageAvatars from "../pages/pageAvatars";
import PagePagination from "../pages/pagePagination";
import PageList from "../pages/pageList";
import PageLine from "../pages/pageLine";
import PageLogo from "../pages/pageLogo";
import PageDropdowns from "../pages/pageDropdown";
import PageDemo from "../pages/pageDemo";
import PageColors from "../pages/pageColors";
import PageToggleSwitch from "../pages/pageToggleSwitch";
import pageBreadcrumbs from "../pages/pageBreadcrumbs";
import PageTabs from "../pages/pageTabs";
import PageColorPicker from "../pages/pageColorPicker";
import PageTable from "../pages/pageTable";
import PageRadio from "../pages/pageRadio";
import PageProgressSpinner from "../pages/pageProgressSpinner";
import PageProgressBar from "../pages/pageProgressBar";
import PageCards from "../pages/pageCard";
import pageHeading from "../pages/pageHeading";

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
        <Route path="/breadcrumb" component={pageBreadcrumbs} />
        <Route path="/button" component={PageButtons} />
        <Route path="/cards" component={PageCards} />
        <Route path="/dropdown" component={PageDropdowns} />
        <Route path="/heading" component={pageHeading} />
        <Route path="/color-picker" component={PageColorPicker} />
        <Route path="/colors" component={PageColors} />
        <Route path="/inputs" component={PageInputs} />
        <Route path="/line" component={PageLine} />
        <Route path="/list" component={PageList} />
        <Route path="/logo" component={PageLogo} />
        <Route path="/pagination" component={PagePagination} />
        <Route path="/progress-bar" component={PageProgressBar} />
        <Route path="/progress-spinner"  component={PageProgressSpinner} />
        <Route path="/radio" component={PageRadio} />
        <Route path="/selects" component={PageSelect} />
        <Route path="/table" component={PageTable} />
        <Route path="/tabs" component={PageTabs} />
        <Route path="/toggle-switch" component={PageToggleSwitch} />
      </Switch>
    </ContainerMain>
  );
}
