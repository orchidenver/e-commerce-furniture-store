import React from 'react';
import styled from 'styled-components';
import loader from '../assets/auth-loader.gif';

export default function Fallback() {
    return (
        <Wrapper className='page-100 '>
            <img src={loader} alt="loading" />
        </Wrapper>
    )
}


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`