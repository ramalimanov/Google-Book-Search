import React from 'react';
import './Display.css';
import Book from './Book';

class Display extends React.Component {
    render() {
        const {results} = this.props;
        let bookResults = [];

		if (results[0] && results[0].totalItems && results[0].items) {
			bookResults = results[0].items.map((book, index) => {
				return <Book key={index} oneBook={book} />;
			});
		}

		return (
			<section id="bookDisplay">
					{!bookResults.length ? 'Sorry!  No books were found, please try again...' : <ul className="bookList">{bookResults}</ul>}
			</section>
		);
	}
}

export default Display;