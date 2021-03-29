import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { formatPrice } from 'utility';
import { CartContext } from 'contexts/CartContext';

export const ProductCard = ({ product }) => {
  const { currency, addToCart } = useContext(CartContext);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image_url} alt={product.title} />
          <p className="paragraph">{product.title}</p>
        </div>

        <p className="paragraph price">
          From: {formatPrice(product.price, currency)}
        </p>

        <Button
          className="mt-2"
          onClick={() => addToCart({ id: product.id, quantity: 1 })}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  addToCart: PropTypes.func,
  currency: PropTypes.string,
  product: PropTypes.object
};
