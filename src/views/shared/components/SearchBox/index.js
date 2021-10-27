import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { useHistory } from 'react-router-dom';

import { IconSearch } from '../../../../icons';
import { DefaultButton } from '../Button/Button.Styled';
import { DefaultInput } from '../Form/Form.Styled';

const SearchBox = ({ shape }) => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);

  const history = useHistory();

  const onChange = (e) => {
    setValue(e.target.value);
    // console.log('@@@.e.target', e.target.value);
  };
  // ZepPXzFL3PNNTm3dBXoI6Bq3sWMu_hCFYdxDjF7jV2M
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/photos/${value}`);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container className={cn('SearchBox', shape, { isFocus: focus })}>
      <Form onSubmit={onSubmit}>
        <Button id="ll">
          <IconSearch />
        </Button>
        <Label htmlFor="ll">
          <Input
            type="text"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="search free..."
          />
        </Label>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  border:1px solid transparent; 
  .round & {
    background: #eee;
    border-radius: 999px;
    padding:0 14px; 
    &:hover {
      border:1px solid #bbb;
      background: #fff;
    }
  }
  .round.isFocus & {
    border:1px solid #bbb;
    background: #fff;
  }

  .square & {
    background: #fff;
    padding:0 18px;
    border-radius: 6px;
  }
`;

const Label = styled.label`
  display: flex; 
  
`;

const Input = styled(DefaultInput)`
  .round & {
    height: 38px;
  }

  .square & {
    height: 52px;
  }
`;

const Button = styled(DefaultButton)`
    svg {
      .round & {
        width: 20px;
        height: 20px;
      }

      .square & {
        width: 24px;
        height: 24px;
      }
    }
`;

export default SearchBox;
