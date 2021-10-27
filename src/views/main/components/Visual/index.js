import React from 'react';
import styled from 'styled-components';

import SearchBox from '../../../shared/components/SearchBox';

const Visual = () => (
  <Container>
    <Overlay />
    <Contents>
      <h1>Unsplash</h1>
      <p>
        The internet’s source of freely-usable images. \n
        Powered by creators everywhere.
      </p>
      <SearchBox shape="square" />
    </Contents>
  </Container>
);

const Container = styled.div`
  position: relative;
  height: 560px;
  background: url("https://images.unsplash.com/photo-1634993110670-474eb7f62e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1803&q=80") center center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  color: #fff;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width:1200px;
  margin: 0 auto;
  h1 {
    font-size: 46px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 24px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: rgba(0, 0, 0, 0.4);
`;

export default Visual;
