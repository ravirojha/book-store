import Book from "./Book";
import Cart from "./Cart";
import Filter from "./Filter";
import {useState} from "react";
import {Spin} from "antd";

const BookStore = () => {

    const [isSpinning, setSpinning] = useState(true);

    if (isSpinning)
        return <Spin/>
    else return <>
        <Filter />
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Cart/>
    </>
}

export default BookStore;