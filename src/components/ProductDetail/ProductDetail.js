import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../actions';

const ProductDetail = (props) => {
	const { name, img, price, description, id } = this.props.product;

	const onCart = () => {
		props.dispatch(addProductToCart(this.props.product));
	};

	return (
		<aside className="col-sm-7">
			<article className="card-body p-5">
				<h3 className="title mb-3">{this.dress.name}</h3>

				<p className="price-detail-wrap">
					<span className="price h3 text-warning">
						<span className="currency">$</span>
						<span className="num">{this.price}</span>
					</span>
				</p>
				<dl className="item-property">
					<dt>Description</dt>
					<dd>
						<p className="text-capitalize">{description}</p>
					</dd>
				</dl>

				<hr />
				<hr />
				
			</article>
		</aside>
	);
};

export default connect()(ProductDetail);
