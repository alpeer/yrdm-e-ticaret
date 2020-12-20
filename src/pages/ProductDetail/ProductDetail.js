import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';

const ProductDetail = (props) => {

    console.log(props);

    return (
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="card">
                <div className="row">
                    
                    {props.dress && <ProductDetailComponent dress={props.dress}/>} 
                </div>
            </div>
        </div>
    ); 
};

const mapStateToProps = (state, props) =>  {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetail);
