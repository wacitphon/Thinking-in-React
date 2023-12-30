import React from "react";
import './styles.css';

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
      </tr>
    );
  }

export  default ProductRow ;