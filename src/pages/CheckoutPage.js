import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();

  const checkoutContent = !cart.length ? (
    <div className='empty'>
      <h2>Your cart is empty</h2>
      <Link className='btn' to='/products'> Go to products</Link>
    </div>
  ) : <StripeCheckout />;

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {checkoutContent}
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage;
