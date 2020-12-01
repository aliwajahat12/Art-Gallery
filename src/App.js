import React, { Component } from 'react';
import data from './data';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className = 'grid-container'>
    <header className = 'row'>
        <div>
            <a href="/">Art Gallery</a>
        </div>
        <div>
        <a href="/cart"> Cart </a>
        <a href="/signin"> Sign In</a>
        </div>
    </header>
    <main>
 <div className = 'row center'>
   {
     data.products.map(product=>(
      <div key = {product._id}className ='card'>
      <a href={`/product/${product._id}`}>
      
        <img 
        className = 'medium'
        src={product.image} 
        alt={product.name}/>
    </a>
     <div className = 'card-body'>
     <a href={`/product/${product._id}`}>
            <h2>{product.name} </h2>  </a>
        <div className = 'rating'>
            <span> <i className = 'fa fa-star'></i> </span>
            <span><i className = 'fa fa-star'></i></span>
            <span><i className = 'fa fa-star'></i></span>
            <span><i className = 'fa fa-star'></i></span>
            <span><i className = 'fa fa-star'></i></span>
        </div>

     <div className = 'price'>{product.price}pkr</div>
        </div>
     </div>
     ))
   }
    


 </div>

    </main>
    <footer className = 'row center'>
<p>All rights are reserved.</p>
    </footer>
</div>
    );
  }
}

export default App;
