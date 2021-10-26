import React from 'react';
import styled from 'styled-components';

import PhotoList from '../../../shared/components/list/PhotoList';

const MainPhotosList = ({ data }) => (
  <Container>
    <PhotoList data={data} />
  </Container>
);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default MainPhotosList;
