import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

class CartContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      currency: 'USD',
      showCart: false
    };
  }

  componentDidMount() {
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const currencyStorage =
      JSON.parse(localStorage.getItem('currency')) || 'USD';
    this.setState({ cartItems: cartStorage, currency: currencyStorage });
  }

  toggleCart() {
    this.setState((prevState) => ({ showCart: !prevState.showCart }));
  }

  removeFromCart(id) {
    const arr = [...this.state.cartItems];
    const newArr = arr.filter((item) => item.id !== id);
    this.setState({ cartItems: newArr });
    localStorage.setItem('cart', JSON.stringify(newArr));
  }

  decreaseQuantity(id) {
    const arr = [...this.state.cartItems];

    const newArr = arr
      .map((cartItem) => {
        if (cartItem.id === id) {
          const obj = { ...cartItem };
          obj.quantity -= 1;

          return obj;
        }

        return cartItem;
      })
      .filter((elem) => elem.quantity > 0);

    this.setState({ cartItems: newArr });
    localStorage.setItem('cart', JSON.stringify(newArr));
  }

  increaseQuantity(id) {
    const arr = [...this.state.cartItems];

    const newArr = arr.map((cartItem) => {
      if (cartItem.id === id) {
        const obj = { ...cartItem };
        obj.quantity += 1;

        return obj;
      }

      return cartItem;
    });

    this.setState({ cartItems: newArr });
    localStorage.setItem('cart', JSON.stringify(newArr));
  }

  addToCart(item) {
    const arr = [...this.state.cartItems];

    if (arr.some((elem) => elem.id === item.id)) {
      this.increaseQuantity(item.id);
      return;
    }

    arr.push(item);
    this.setState({ cartItems: arr });
    localStorage.setItem('cart', JSON.stringify(arr));
    this.toggleCart();
  }

  onChangeCurrency(currency) {
    this.setState({ currency });
    localStorage.setItem('currency', JSON.stringify(currency));
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          onChangeCurrency: this.onChangeCurrency.bind(this),
          decreaseQuantity: this.decreaseQuantity.bind(this),
          increaseQuantity: this.increaseQuantity.bind(this),
          addToCart: this.addToCart.bind(this),
          removeFromCart: this.removeFromCart.bind(this),
          toggleCart: this.toggleCart.bind(this)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

CartContextProvider.propTypes = {
  children: PropTypes.node
};

export default CartContextProvider;
