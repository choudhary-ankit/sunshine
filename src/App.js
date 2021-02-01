import React, { Component } from 'react'
import HomePage from './component/HomePage/HomePage'
import NavBar from './component/NavBar/NavBar'
import Product from './component/Product/Product'
import {Route} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/product" exact component={Product}></Route>
      </div>
    )
  }
}
