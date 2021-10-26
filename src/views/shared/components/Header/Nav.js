import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';

import { DefaultButton } from '../Button/Button.Styled';

const Nav = () => (
  <Container>
    <Link to="/login" className="btn-login">Login</Link>
    <Link to="/login" className="btn-submit-img">Submit a photo</Link>
    <ButtonMenu>
      <GrMenu />
    </ButtonMenu>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: -10px;
  a {
    display: flex;
    align-items: center;
    color:#767676;
    font-size:14px;
    padding:0 5px;
    &.btn-submit-img {
      height: 32px;
      border-radius: 4px;
      border:1px solid #d1d1d1;
      margin: 0 10px;
    }
  }
`;

const ButtonMenu = styled(DefaultButton)`
  width: 38px;
  height: 38px;
  font-size: 16px;
  svg {
    
    fill:#767676;
  }
`;

export default Nav;
