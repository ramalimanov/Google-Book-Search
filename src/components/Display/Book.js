import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        const { oneBook } = this.props;
        const imageURL = "";
        const bookImage = findImage(oneBook);
        const author = findAuthors(oneBook);
        const price = findPrice(oneBook);

        function findImage(oneBook) {
            let bookImageURL = oneBook.volumeInfo && oneBook.volumeInfo.imageLinks && oneBook.volumeInfo.imageLinks.smallThumbnail;
            return bookImageURL ? bookImageURL : imageURL;
        }

        function findAuthors(oneBook) {
            let authorList = oneBook.volumeInfo && oneBook.volumeInfo.authors;
            let authors = [];

            if (!authorList) {
                return 'Not Available';
            }

            authorList.map((author, index) => authors.push(author));
            return authors.join(', ');
        }

        function findPrice(oneBook) {
            let bookPrice = oneBook.saleInfo.retailPrice && oneBook.saleInfo.retailPrice.amount;
            let currency = oneBook.saleInfo.retailPrice && oneBook.saleInfo.retailPrice.currencyCode;

            if (!bookPrice) {
                return 'Free' 
            }
            return `$${bookPrice} ${currency}`;
        }

        return (
            <li className="book">
                <h1 className="bookTitle">{oneBook.volumeInfo.title}</h1>
                <div className="Info">
                    <a
                        href={oneBook.saleInfo.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkButton"
                    >
                        <img
                            className="bookImage"
                            src={bookImage}
                            alt={bookImage ? oneBook.volumeInfo.title : 'No Image'}
                        />
                    </a>
                    <div className="bookDesc">
                        <p className="bookAuthor">Author: {author}</p>
                        <p className="bookPrice">Price: {price}</p>
                        <br />
                        <p className="bookDescripton">{oneBook.volumeInfo.description}</p>
                        <br />
                    </div>
                </div>
                <br />
            </li>
        )
    }
}

export default Book;