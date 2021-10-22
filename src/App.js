import React from 'react';
import styled from 'styled-components';
import {Route,Switch} from "react-router-dom";

import Main from "./pages/Main";
import HeaderContainer from "./views/shared/containers/HeaderContainer";
import {GlobalStyle} from "./style/GlobalStyle.Styled";
import Search from "./pages/Search";

const App = () => {
  return (
    <Container>
        <GlobalStyle/>
        <HeaderContainer/>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/search/:category/:query" component={Search}/>
        </Switch>
    </Container>
  );
}

const Container = styled.div`
    
`;

export default App;
