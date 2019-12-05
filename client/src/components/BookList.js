import React from 'react';
import BookCard from './BookCard';


const BookList = (props) => {
//this will render the the books from the response
    return(
        <div className="list">
            {
                props.book.map((book, i)=>{
                    return <BookCard 
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            Published published={book.volumeInfo.publisheddate}
                    />
                })
            }
        </div>
    )
}

export default BookList;