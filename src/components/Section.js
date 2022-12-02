import React, { Component } from 'react'
import Products from './section/Products'
import ProductDetail from './section/ProductDetail'
import {Route} from "react-router-dom"

export class Section extends Component {
    render() {
        return(
            <section>
                
                <Route path ="/product" component={Products} exact></Route>
                <Route path ="/product/:id" component={ProductDetail} ></Route>
                </section>
        )
    }
}

export default Section