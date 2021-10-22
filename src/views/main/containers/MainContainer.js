import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import MainPhotosList from "../components/MainPhotosList";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";
import {API_KEY, BASE_API_URL} from "../../../constant/common";

const MainContainer = () => {

    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        const config = {
            baseUrl: `${BASE_API_URL}`,
            url: `/photos`,
            method: 'GET',
            params: {},
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        }
        const result = await axios(config);
        console.log('@@result', result);
        setPhotos(result.data);
    }

    useEffect(() => {
        getPhotos();

    }, [])

    console.log('aaa', photos)
    return (
        <Container>
            <ContentContainer>
                <MainPhotosList data={photos}/>
            </ContentContainer>
        </Container>
    );
}

const Container = styled.div`
  
`;

export default MainContainer;
