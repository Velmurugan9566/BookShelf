import React from "react";
import { Link } from "react-router-dom";
function Myshelf() {
    var books = JSON.parse(localStorage.getItem('books')) || []
    console.log(JSON.parse(localStorage.getItem('books')))
    function removeshelf(index) {
        books.splice(index, 1)
        localStorage.setItem('books', JSON.stringify(books))
        window.location.reload(false)
    }
    return (
        <div className="Shelf">
            <Link to='/OpenBook_Library' className="shelf-link">Search Book</Link>
            <h2>Personal BookShelf</h2>
            <div className='block' >
                {books.length != 0 ?
                    books.map((book, index) => (
                        <div id={book.key} className="Box" key={book.key}>
                            <h3>{book.title}</h3>
                            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                            <button onClick={() => removeshelf(index)}>Remove from BookShelf</button>
                        </div>

                    )) :
                    <h3> Your BookShelf is empty...</h3>
                }
            </div>
        </div>
    )

}

export default Myshelf;
