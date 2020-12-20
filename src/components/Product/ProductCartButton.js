
import React from 'react'
import { connect, useSelector } from 'react-redux';
import classNames from 'classnames'
import { AddToCart } from '../Button/Button'
import { addProductToCart, removeProductFromCart } from '../../actions';

export default connect()(({ product , dispatch}, e) => {

  const cart = useSelector(state => state.shop.cart)
  const productInCart = cart.filter(item=>item.id === product.id).length > 0
  const operation = (e) => {
    e.preventDefault();
    dispatch(productInCart ? removeProductFromCart(product) : addProductToCart(product))
  }
  return <AddToCart onClick={operation} className={classNames({ productInCart },"btn btn-info product__cart_button")}>
    {
      productInCart ? 'Sepetten Çıkar' : 'Sepete Ekle'
    }
	</AddToCart>
})