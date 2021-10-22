import React from 'react';
import styled from 'styled-components';
import {IconLogo} from "../../../../icons";
import Nav from "./Nav";
import SearchBox from "../SearchBox";

const Gnb = () => {
  return (
    <Container>
        <Logo>
            <IconLogo/>
        </Logo>
        <SearchBox/>
        <Nav/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;

`;

const Logo = styled.div`
    margin-right: 25px;
`;

export default Gnb;
