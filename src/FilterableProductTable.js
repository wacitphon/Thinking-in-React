import React from "react";
import { useState } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import './styles.css';

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div className="center" >
         <h1>Thinking in React</h1>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }

export default FilterableProductTable ;  