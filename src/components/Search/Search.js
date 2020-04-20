import React from 'react';
import './Search.css';
import SearchBox from './SearchBox';
import Filters from './Filters';

function Search(props) {
    return (
        <form
            id="searchForm"
            onSubmit={e => props.handleSubmit(e)}
        >
            <SearchBox  
                searchText={props.searchText}
                handleChange={props.handleChange}
            />

            <Filters
                printType={props.printType}
                bookType={props.bookType}
                handleChange={props.handleChange}
            />
        </form>
    )
}

export default Search;