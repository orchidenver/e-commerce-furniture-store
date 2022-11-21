import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { singleProductUrl as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  const navigate = useNavigate();
  const {
    singleProductError,
    singleProductLoading,
    singleProduct,
    fetchSingleProduct
  } = useProductsContext();
  const {
    name,
    price,
    description,
    stock,
    reviews,
    stars,
    id: sku,
    company,
    images
  } = singleProduct;

  useEffect(() => {
    let timer;

    if (singleProductError) {
      timer = setTimeout(() => {
        navigate('/');
      }, 3000);
    }

    return () => { clearTimeout(timer) };
    // eslint-disable-next-line
  }, [singleProductError]);

  if (singleProductLoading) return <Loading />;
  if (singleProductError) return <Error />;

  return (
    <>
      <Helmet>
        <meta name="description" content="This page contains a single product (SKU)" />
        <title>Comfy Sloth. Product</title>
      </Helmet>
      <Wrapper>
        <PageHero title={name} product={singleProduct} />
        <div className='section section-center page'>
          <Link to='/products' className='btn'>
            back to products
          </Link>
          <div className='product-center'>
            <ProductImages images={images} />
            <section className='content'>
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className='price'> {formatPrice(price)}</h5>
              <p className='desc'> {description}</p>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? 'In stock' : 'out of stock'}
              </p>
              <p className='info'>
                <span>SKU : </span>
                {sku}
              </p>
              <p className='info'>
                <span>Brand : </span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </section>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
