import React from "react";
import './styles.css';

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form>
        <div className="inputbox">
        <input 
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        </div>
        
        <div class="checkbox-wrapper-37">
  <input name="checkbox" id="terms-checkbox-37" type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
  <label for="terms-checkbox-37" class="terms-label">
    <svg
      class="checkbox-svg"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_476_5-37" fill="white">
        <rect width="200" height="200"></rect>
      </mask>
      <rect
        width="200"
        height="200"
        class="checkbox-box"
        stroke-width="40"
        mask="url(#path-1-inside-1_476_5-37)"
      ></rect>
      <path
        class="checkbox-tick"
        d="M52 111.018L76.9867 136L149 64"
        stroke-width="15"
      ></path>
    </svg>
    <span class="label-text">Only show products in stock</span>
  </label>
</div>


    </form>

    );
  }
  

export default SearchBar ;  

