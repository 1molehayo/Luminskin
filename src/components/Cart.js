import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  formatPrice,
  getAggregate,
  isArrayEmpty,
  transformArray,
  updateObject
} from 'utility';
import { CURRENCY } from 'utility/constants';
import { CartContext } from 'contexts/CartContext';
import { Button } from 'react-bootstrap';
import { ModalContainer } from './ModalContainer';
import { SelectComponent } from './Select';

export const Cart = ({ currencyList, products }) => {
  const {
    cartItems,
    currency,
    decreaseQuantity,
    increaseQuantity,
    onChangeCurrency,
    removeFromCart,
    showCart,
    toggleCart
  } = useContext(CartContext);

  const remodelCartData = (arr, cart) => {
    if (isArrayEmpty(arr)) {
      return [];
    }

    return arr
      .filter((productItem) => cart.find((elem) => elem.id === productItem.id))
      .map((cartItem) => {
        const cartObj = cart.find((elem) => elem.id === cartItem.id);
        const obj = updateObject(cartItem, cartObj);
        obj.unit_price = cartItem.price;
        obj.price = obj.unit_price * obj.quantity;

        return obj;
      });
  };

  return (
    <ModalContainer isOpen={showCart} closeModal={toggleCart} className="cart">
      <div className="cart-top">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="close-button" onClick={toggleCart}>
                <span className="icon-right-arrow-angle"></span>
              </div>
            </div>

            <div className="col-4">
              <h5 className="cart-title">YOUR CART</h5>
            </div>

            <div className="filler"></div>
          </div>
        </div>
      </div>

      <div className="cart-body">
        <div className="currency-row">
          <SelectComponent
            className="currency-select"
            id="currency"
            onChange={(e) => onChangeCurrency(e.target.value)}
            value={currency}
            options={transformArray(currencyList)}
            frequentOptions={transformArray(Object.keys(CURRENCY))}
          />
        </div>

        <div className="cart-list">
          {!isArrayEmpty(cartItems) &&
            !isArrayEmpty(products) &&
            remodelCartData(products, cartItems).map((item, index) => (
              <div className="cart-card" key={index}>
                <div
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <span className="icon-close"></span>
                </div>

                <div className="cart-row">
                  <p className="paragraph mb-0">{item.title}</p>
                </div>
                <div className="cart-row">
                  <div className="cart-image">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="cart-row">
                  <div className="row no-gutters align-items-center">
                    <div className="col-5">
                      <div className="quantity-selector">
                        <span onClick={() => decreaseQuantity(item.id)}>-</span>
                        <input type="text" value={item.quantity} readOnly />
                        <span onClick={() => increaseQuantity(item.id)}>+</span>
                      </div>
                    </div>

                    <div className="col-7">
                      <p className="paragraph mb-0">
                        {formatPrice(item.price, currency)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {(isArrayEmpty(cartItems) || isArrayEmpty(products)) && (
            <div className="paragraph text-center">
              There are no items in your cart.
            </div>
          )}
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-subtotal">
          <span>Subtotal</span>

          <div className="subtotal-price">
            {formatPrice(
              getAggregate(remodelCartData(products, cartItems), 'price'),
              currency
            )}
          </div>
        </div>

        <div className="cart-checkout-buttons">
          <Button className="w-100 btn-outline">
            MAKE THIS A SUBSCRIPTION &#40;SAVE 20%&#41;
          </Button>
          <Button className="w-100 mt-3">PROCEED TO CHECKOUT</Button>
        </div>
      </div>
    </ModalContainer>
  );
};

Cart.propTypes = {
  currencyList: PropTypes.array,
  products: PropTypes.array
};
