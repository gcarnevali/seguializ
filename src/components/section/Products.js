import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { DataContext } from '../Context';

export class Producto extends Component {

    static contextType = DataContext;

    render(){
        const {products} = this.context;
        return(
        <div id='product'>
            {
                 products.map(product =>(
                    <div className='card' key={product.id}>
                       <Link to={`/product/${product.id}`}>
                        <img src={product.src} alt=''/>
                       </Link> 
                    </div>
                ))
            }
        </div>
        )
    }
}

export default Producto;