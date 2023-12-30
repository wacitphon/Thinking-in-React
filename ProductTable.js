import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow  from "./ProductRow"
import './styles.css';


function ProductTable({ products, filterText, inStockOnly }) {
  const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((product) => !inStockOnly || (inStockOnly && product.stocked));

  const rows = [];
  let lastCategory = null;

  filteredProducts.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable ;
  