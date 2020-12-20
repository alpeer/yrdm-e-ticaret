import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import Modal from './components/Modal/Modal';



export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/dress'}/>
                    }}/>
                    <Route exact path={'/dress'} component={Home}/>
                    <Route exact path={'/dress/:id'} component={Modal}/>
                    <Route exact patr={'/cart'} component={ShoppingCart}/>
                </Switch>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
