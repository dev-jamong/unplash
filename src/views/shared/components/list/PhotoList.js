import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import PhotoItem from '../item/PhotoItem';
import { recomposeData } from '../../../../lib/photo';

const PhotoList = ({ data }) => {
  // console.log(data);

  const composedData = recomposeData(data);

  return (
    <Container>
      <Row>
        {
          composedData.map((groups) => (
            <Col>
              {
                groups.map((item) => (
                  <ItemWrpper>
                    <PhotoItem item={item}/>
                  </ItemWrpper>
                ))
              }
            </Col>
          ))
        }

      </Row>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.3%;
  padding: 0 10px;
`;

const ItemWrpper = styled.div`
  margin-bottom: 20px;
`;

export default PhotoList;
