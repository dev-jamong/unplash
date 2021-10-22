import React, {useState} from 'react';
import styled from 'styled-components';
import {IconSearch} from "../../../../icons";
import {useHistory} from "react-router-dom";

const SearchBox = () => {

    const [value,setValue] = useState('');

    const history = useHistory();

    const onChange = (e) => {
        setValue(e.target.value);
        console.log('@@@.e.target',e.target.value);
    }
    // ZepPXzFL3PNNTm3dBXoI6Bq3sWMu_hCFYdxDjF7jV2M
    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/photos/${value}`);
    }

      return (
        <Container>
            <form onSubmit={onSubmit}>
                <button>
                    <IconSearch/>
                </button>
                <label htmlFor="">
                    <input
                       type="text"
                       value={value}
                       onChange={onChange}
                       placeholder="search free..."
                    />
                </label>
            </form>
        </Container>
     );
}

const Container = styled.div`
  flex:1;
`;



export default SearchBox;
