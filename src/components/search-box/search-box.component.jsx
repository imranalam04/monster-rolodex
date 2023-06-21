import React from "react";
import './search-box.styles.css';
const Search = ({className,placeholder,onChangeHandler}) =>  {
    return(
        <input
        type="search"
        className={` search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
        
    
}

export default Search