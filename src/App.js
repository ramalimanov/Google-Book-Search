import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Display from './components/Display/Display';

const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
const APIKey = 'AIzaSyCgoa5LezjjjY6hOUkXJUjC7h0lswQrwWs';

class App extends React.Component {
  state = {
    results: [],
    searchText: '',
    printType: 'all',
    bookType: 'ebooks',
  }

  displayBooks = data => {
		this.setState({
			results: [data]
		});
  }

handleChange = e => {
    const {
        target: { name, value }
    } = e;
    this.setState({ [name]: value });
};

handleSubmit = e => {
    e.preventDefault();
    this.fetchBooks();
}

fetchBooks = () => {
    const URL = `${searchURL}q=${this.state.searchText}&filter=${this.state.bookType}&printType=${this.state.printType}&langRestrict=en&orderBy=relevance&key=${APIKey}`;

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something is wrong, please try again later.');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => this.displayBooks(data))
        .catch(err => {
            this.setState({
                error: err.message
            });
        })
};

  render () {
    return (
      <main className='App'>
        <Header />
        <Search 
          displayBooks={data => this.displayBooks(data)}
          handleSubmit={this.handleSubmit} 
          searchText={this.state.searchText}
          handleChange={this.handleChange}
          printType={this.state.printType}
          bookType={this.state.bookType}
        />
        <Display results={this.state.results} />
      </main>
    );
  }
}

export default App;