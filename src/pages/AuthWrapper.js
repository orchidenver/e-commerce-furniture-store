import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";
import loader from '../assets/auth-loader.gif';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (error || isLoading) {
    return (
      <Wrapper>
        {error ? <h1>{error.message}</h1> : null}
        {isLoading ? <LazyLoadImage src={loader} alt="loading page..." effect='blur' /> : null}
      </Wrapper>
    )
  }

  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper;