import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BASE_API_URL} from "../../../constant/common";
import MainPhotosList from "../../main/components/MainPhotosList";
import PhotoList from "../../shared/components/list/PhotoList";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";

const SearchContainer = () => {
    //검색어가 무엇이지 획득!
    const {query} = useParams();
    // const query = params.query; {query} 로 구조분해 할당할수 잇다. 왜냐 key와 value가 동일하니가!

    const initialState = {
        results:[],
        total:undefined,
        title:undefined
    }

    const [resultPhotos,SetResultPhotos] = useState(initialState);

    const searchPhotos = async () => {
        console.log(BASE_API_URL)

        const config = {
            baseURL: BASE_API_URL,
            url: '/search/photos',
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            },
            params: {
                query
            }
        }
        const result = await axios(config)
        SetResultPhotos(result.data);
    }
    console.log(resultPhotos)
    useEffect(() => {
        searchPhotos();
    }, [query])
    //위에 useEffect는 한번만 실행되기때문에 []안에 디펜던시로 query를 걸어줘야해

    return (
        <Container>
            <ContentContainer>
                <PhotoList data={resultPhotos.results}/>
            </ContentContainer>
        </Container>
    );
}

const Container = styled.div`

`;

export default SearchContainer;
