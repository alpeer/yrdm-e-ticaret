
import React from 'react'
import { AddToCart } from '../Button/Button'
import { connect,ReactReduxContext, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../actions';

export default connect()(({ product , dispatch}, e) => {

  const cart = useSelector(state => state.shop.cart)
  const productInCart = cart.filter(item=>item.id === product.id).length > 0
  const operation = (e) => {
    e.preventDefault();
    dispatch(productInCart ? removeProductFromCart(product) : addProductToCart(product))
  }
  return <AddToCart onClick={operation} className="btn btn-info product__add-to-cart">
    {
      productInCart ? 'Remove from Cart' : 'Add to Cart'
    }
	</AddToCart>
})