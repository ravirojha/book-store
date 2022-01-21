import Book from "./Book";
import Cart from "./Cart";
import Filter from "./Filter";
import {useState} from "react";
import {Button, Spin} from "antd";

const BookStore = () => {

    const [isSpinning, setSpinning] = useState(false);
    const [books, setBooks] = useState([])


    return <Spin spinning={isSpinning}>
        <Filter />
        {books.map((book) => {
            return (<Book />)
        })}
        <Button type={'primary'}> Load More </Button>
        <Cart/>
    </Spin>
}

export default BookStore;