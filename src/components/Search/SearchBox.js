import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
    return (
        <section className="searchBox">
            <label htmlFor="searchText">Search: </label>
            <input
                id="searchText"
                name="searchText"
                type="text"
                placeholder=",Life style, Education, Travell..."
                value={props.searchText}
                required
                onChange={props.handleChange}
            />
            <button id="searchButton">Search</button>
        </section>
    )
}

export default SearchBox;