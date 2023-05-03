import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import "./Cart.scss";
import { clearCart, descrementQuantity, getTotals, incrementQuantity, removeItem } from '../../redux/slice/cardSlice';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleIncrement = (cartItem) => {
    dispatch(incrementQuantity(cartItem))
  }

  const handleDescrement = (cartItem) => {
    dispatch(descrementQuantity(cartItem))
  }

  const handleRemoveCartItem = (cartItem) => {
    if (window.confirm("Are you sure delete Item?")) {
      dispatch(removeItem(cartItem));
    };
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure delete Item?")) {
      dispatch(clearCart());
    };
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          {user.issLogIn === true ? (
            <div>
              <p>Your cart is current empty</p>
              <div className="start-shopping">
                <Link to="/products">
                  <Button>
                    <ArrowBackIcon />
                    <span>Start Shopping</span>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p>You are not logged in. Please login...</p>
              <div className="start-shopping">
                <Link to="/login">
                  <Button>
                    <ArrowBackIcon />
                    <span>Login</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems?.map((cartItem, id) => (
                <div className="cart-item" key={id}>
                  <div className="cart-product">
                    <img src={cartItem.imgUrl} alt={cartItem.title} />
                    <div>
                      <h3>Title: {cartItem.title}</h3>
                      <h3>Description: {cartItem.description}</h3>
                      <h3>category: {cartItem.category}</h3>
                      <Button
                        className='remove'
                        variant='contained'
                        color='error'
                        onClick={() => handleRemoveCartItem(cartItem)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDescrement(cartItem)} >-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncrement(cartItem)} >+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="cart-sumary">
            <Button
              className="clear-cart"
              variant='contained'
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </Button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amout">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              {user.issLogIn === true ? (
                <Button variant='contained' color='primary' className='checkout'>Checkout</Button>
              ) : (
                <Link to="/login">
                  <Button variant='contained' color='primary' className='checkout'>Checkout</Button>
                </Link>
              )}
              <div className="continue-shopping">
                <Link to="/products">
                  <Button>
                    <ArrowBackIcon />
                    <span>Continue Shopping</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart