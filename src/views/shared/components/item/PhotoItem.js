import React from 'react';
import styled from 'styled-components';

const PhotoItem = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <img src={item.urls.regular} alt={item.alt_description} />
    </Container>
  );
};

const Container = styled.div`
  img {
    height: 270px;
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotoItem;
