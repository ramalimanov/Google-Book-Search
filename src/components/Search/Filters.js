import React from 'react';
import './Filters.css';

const printTypes = ['all', 'books', 'magazines'];
const bookTypes = ['ebooks', 'free-ebooks', 'paid-ebooks'];

function Filters(props) {
    const printTypeOptions = printTypes.map((printTypeOption, index) => (
        <option
            value={printTypeOption}
            key={index}
        >
            {printTypeOption}
        </option>
    ));

    const bookTypeOptions = bookTypes.map((bookTypeOption, index) => (
        <option
            value={bookTypeOption}
            key={index}
        >
            {bookTypeOption}
        </option>
    ));

    return (
        <section className="filters">
            <label htmlFor="printType">Print Type: </label>
            <select
                id="printType"
                name="printType"
                value={props.printType}
                onChange={props.handleChange}
            >
                {printTypeOptions}
            </select>

            <label htmlFor="bookType">Book Type: </label>
            <select
                id="bookType"
                name="bookType"
                value={props.bookType}
                onChange={props.handleChange}
            >
                {bookTypeOptions}
            </select>
        </section>
    )
}

export default Filters;