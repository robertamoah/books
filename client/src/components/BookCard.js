import React, {Component} from 'react';
import API from "../components/utils/API";






class BookCard extends Component {
    constructor (props){
        super(props);

        this.state = {
            saveBook: [],
            title: "",
            author: ""
        }

    };


    componentWillMount(){
    
      
    }
        
    


    saveBook = (event) =>{
        event.preventDefault();
        

        if (this.state.title && this.state.author) {
            API.saveBook({
              title: this.state.title,
              author: this.state.author,
            })
              .then(res => this.saveBook())
              .catch(err => console.log(err));
          } 
    }


    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
    };


    


    render(){

        let saved = this.state.saveBook.map((book)=> {
            return(
            <div>{this.props.title}</div>
            )
        })



    return(
        <div className="list">
            <img src={this.props.image} alt=""/>
            <div>
            <h2>Title: {this.props.title}</h2>
            <h3> Author: {this.props.author}</h3>
            <h3 className="font"> Published: {this.props.publishedDate}</h3>
            <button 
            
            onClick={saved} >Save Book</button>
            </div>
        </div>
    )
    }
}

export default BookCard;