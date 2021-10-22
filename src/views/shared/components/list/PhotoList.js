import React from 'react';
import styled from 'styled-components';
import PhotoItem from "../item/PhotoItem";

const PhotoList = ({data}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item) => (
                        <Col>
                            <PhotoItem item={item}/>
                        </Col>

                    ))
                }
            </Row>
        </Container>
    );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.3%;
  padding: 0 10px;
  margin-bottom: 20px;

`;

export default PhotoList;