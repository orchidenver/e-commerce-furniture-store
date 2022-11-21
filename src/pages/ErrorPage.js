import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import errorPage from '../assets/404.svg';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
        <title>Comfy Sloth. Error</title>
      </Helmet>
      <Wrapper className='page-100'>
        <section>
          <LazyLoadImage src={errorPage} alt="page missing" effect='blur' />
          <Link to='/' className="btn">back home</Link>
        </section>
      </Wrapper>
    </>

  );
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 400px;
    height: auto;
  }

  .btn {
    width: 200px;
  }
`

export default ErrorPage
