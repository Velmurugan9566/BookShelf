import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';
function Booksearch() {
    const [query, setquery] = useState('');
    const [result, setres] = useState([]);

    useEffect(() => {
        if (query) {
            axios.get(`https://openlibrary.org/search.json?title=${query}`)
                .then(res => {
                    const { docs } = res.data
                    const da = docs.slice(0, 20)
                    setres(da)
                })
                .catch(err => {
                    alert(err)
                    //console.log(err)
                })
        }
    }, [query])

    //localStorage.clear()


    function addToshelf(bk) {
        var book = JSON.parse(localStorage.getItem('books')) || []
        
        book.push(bk)

        localStorage.setItem('books', JSON.stringify(book));
        alert('Book added to BookShelf');
        console.log(localStorage.getItem('books'))
    }
    return (
        <>
            <header className="header">
                <h2 className="head">Open Book Library</h2>
                <Link to="/OpenBook_Library/Personal-Shelf" className="shelf-link">My Book Shelf</Link>
            </header>
            <p className="title">Search Book as you want..</p>
            <input type="text" value={query} onChange={(e) => setquery(e.target.value)} className="inputbox" />
            <div className='block' >
                {result.map(book => (
                    <div id={book.key} className="Box" key={book.key}>
                        <h3>{book.title}</h3>
                        <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                        <button onClick={() => addToshelf(book, book.key)}>Add to BookShelf</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Booksearch;
