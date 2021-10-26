import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MainPhotosList from '../components/MainPhotosList';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import { API_KEY, BASE_UNSPLASH_API_URL } from '../../../constant/common';
import Visual from '../components/Visual';

const MainContainer = () => {
  const [photos, setPhotos] = useState([]);
  console.log({ BASE_UNSPLASH_API_URL });

  const getPhotos = async () => {
    const config = {
      baseURL: BASE_UNSPLASH_API_URL,
      url: '/photos',
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    };
    const result = await axios(config);
    console.log({ result });
    setPhotos(result.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container>
      <Visual />
      <ContentContainer>
        <MainPhotosList data={photos} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  
`;

export default MainContainer;
