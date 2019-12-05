import React, {Component} from 'react';
import Search from './serarch';
import request from 'superagent';
import BookList from './BookList';

class Book extends Component {
    //logic 
    constructor (props){
        super(props)
        this.state= {
            book:[],
            searchField: '',
            Save: [],


        }
    }

    //methods
    handleSearch = (e) => {
        //this state will handle the the information entered in the search box. this 'event' must be entered to the search component to connect them.
        this.setState ({searchField: e.target.value})
    }

    searchBook = (e) => {
      e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?")
            .query({q: this.state.searchField})
            .then((data)=> {
              this.setState({book: [...data.body.items]})
            })
    }

    render(){

      return (
        <div>
          <Search searchBook={this.searchBook} handleSearch={this.handleSearch}/>
          <BookList book={this.state.book}/>
        </div>
    );
    }
  }

  export default Book;