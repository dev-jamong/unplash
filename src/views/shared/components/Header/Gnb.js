import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconLogo } from '../../../../icons';
import Nav from './Nav';
import SearchBox from '../SearchBox';

const Gnb = () => (
  <Container>
    <Logo to="/">
      <IconLogo />
    </Logo>
    <SearchBox shape="round" />
    <Nav />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;

`;

const Logo = styled(Link)`
    margin-right: 25px;
`;

export default Gnb;
