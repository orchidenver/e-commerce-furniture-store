import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="This page describes the company" />
        <title>Comfy Sloth. About Us</title>
      </Helmet>
      <main>
        <PageHero title='about' />
        <Wrapper className='page section section-center'>
          <LazyLoadImage src={aboutImg} alt='desk' effect='blur' />
          <article>
            <div className="title">
              <h2>our story</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima accusantium quia magnam, iure eum atque quas deleniti sint aliquid rerum itaque numquam maiores esse accusamus ducimus nostrum pariatur excepturi nam, consequuntur nobis, modi alias possimus eveniet fugiat! Velit quasi, nesciunt architecto hic quia eum earum omnis expedita consequuntur repellat, rerum reprehenderit, temporibus aliquid? Dolorem perferendis, ducimus expedita consectetur aliquid tenetur, ut qui animi hic placeat veniam officia voluptates consequuntur ipsa libero ipsam dolorum perspiciatis numquam, magnam recusandae impedit. Sapiente porro ex repellendus neque mollitia eius cum ea deserunt, magni id consequuntur tempore voluptate excepturi earum ut! Debitis fugiat saepe est?
            </p>
          </article>
        </Wrapper>
      </main>
    </>

  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
