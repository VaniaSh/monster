import React from 'react';
import './search-box.styles.css'
const SearchBox = ({placeholder, handlerChange})=> {

    return (
        <div>
            <input
                className='search'
                type="search"
                placeholder={placeholder}
                onChange={handlerChange}
            />
        </div>
    );
};

export default SearchBox;