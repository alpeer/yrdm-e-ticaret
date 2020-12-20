import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import { addProductToCart } from '../../actions';
import { AddToCart } from '../Button/Button';
import { ProductDetailButton } from '../Button/Button';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	state = {
		dress: [],
	};
	handleClick(e) {
		e.preventDefault();
		this.props.dispatch(addProductToCart(this.props.product));
	}

	componentDidMount() {
		axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`).then((response) => {
			this.setState({
				dress: response.data,
			});
			console.log(response);
		});
	}
	render() {
		//console.log('dress: ', this.state.dress);
		return (
			<div>
				{this.state.dress.map((dress) => {
					return (
						<div key={`${dress.id}`} className="card h-100 product">
							<Link to={`/dress/${dress.id}`} className="product__link">
								<img className="card-img-top product__img" src={`${dress.img}`} />
							</Link>
							<div className="card-body product__text">
								<h4 className="card-title product__title">
									<Link to={`/dress/${dress.id}`}>{dress.name} </Link>
								</h4>
								<h5 className="product__price">${dress.price}</h5>
								<p className="card-text product__description">{dress.description}</p>
								<AddToCart onClick={this.handleClick} className="btn btn-info product__add-to-cart">
									Add to cart
								</AddToCart>

								<Link to={`/dress/${dress.id}`} className="product__link">
									<ProductDetailButton className="btn btn-info product__add-to-cart">Detay</ProductDetailButton>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default connect()(Product);
