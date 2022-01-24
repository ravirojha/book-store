import Book, { IBook } from "./Book";
import Cart from "./Cart";
import Filter from "./Filter";
import {useEffect, useState} from "react";
import {Button, Spin} from "antd";
import BookService from '../service/book-service';

const BookStore = () => {

    const [isSpinning, setSpinning] = useState(false);
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        if(books.length===0)
        setSpinning(true);
        else
        setSpinning(false);
        BookService.fetchBooks({minPrice: 12, maxPrice: 50, minQty :1 , page: 1}).then(
        bookData => setBooks(bookData)
        );
    },[books.length])

    

    return <Spin spinning={isSpinning}>
        <Filter/>
        {   books.length >= 10 ? 
            books.map((book) => {
                return (<Book key={book.id} book={book}/>)
            }) : null
        }
        <Button type={'primary'}> Load More </Button>
        <Cart/>
    </Spin>
}

export default BookStore;