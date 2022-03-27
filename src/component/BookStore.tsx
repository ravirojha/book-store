import Book, { IBook } from "./Book";
import Cart from "./Cart";
import Filter from "./Filter";
import {useEffect, useRef, useState} from "react";
import {Button, Spin} from "antd";
import BookService from '../service/book-service';

const BookStore = () => {

    const [isSpinning, setSpinning] = useState(true);
    const [books, setBooks] = useState<IBook[]>([]);
    const minPriceRef = useRef();
    const maxPriceRef = useRef();
    const minQtyRef = useRef();
    const [minPrice, setMinPrice] = useState(12);
    const [maxPrice, setMaxPrice] = useState(50);
    const [minQty, setMinQty] = useState(2);
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [page, setPage] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
   

    function handleFilter() {
        const tempMinPrice : any = minPriceRef.current;
        if(tempMinPrice && tempMinPrice.value.length > 0) {
        setMinPrice(parseInt(tempMinPrice.value));
        }

        const tempMaxPrice : any = maxPriceRef.current;
        if(tempMaxPrice && tempMaxPrice.value.length > 0) {
        setMaxPrice(parseInt(tempMaxPrice.value));
        }

        const tempMinQty : any = minQtyRef.current;
        if(tempMinQty && tempMinQty.value.length > 0) {
            setMinQty(parseInt(tempMinQty.value));
        }
    }


    function cartHandler(pricePerQuantity: number, action: string) {
        if(action==='increase') {
            setTotalBooks(totalBooks+1);
            const tempAmount = totalAmount + pricePerQuantity;
            if(totalBooks >= 10 || totalAmount > 1000)
            {
                const discount = 0.1*totalAmount;
                setTotalDiscount(discount);
                setTotalAmount(tempAmount - discount);
            }
            else {
                setTotalAmount(tempAmount);
            }
        }
        else if(action==='decrease') {
            setTotalBooks(totalBooks-1);
            const tempAmount = totalAmount - pricePerQuantity;
            if(totalBooks >= 10 || totalAmount > 1000)
            {
                const discount = 0.1*totalAmount;
                setTotalDiscount(discount);
                setTotalAmount(tempAmount - discount);
            }
            else {
                setTotalAmount(tempAmount);
            }
        }
    }

    function incrementPageNumber() {
        setPage(page+1);
    }


    useEffect(() => {

        setSpinning(true);
        BookService.fetchBooks({minPrice, maxPrice, minQty, page}).then(
        (bookData) => {
            if(bookData.length === 0) {
                setDisabled(true)
                setBooks([])
                setError('No data Found')
            } else setBooks(bookData)
        }
        ).then(() => setSpinning(false)).catch((error) => {
            setError(error.message)
            setSpinning(false)
            setBooks([])
            setDisabled(true)
        });
    },[books.length, maxPrice, minPrice, minQty, page])

    

    return <Spin spinning={isSpinning}>
        <Filter handleFilter={handleFilter} minPriceRef={minPriceRef} maxPriceRef={maxPriceRef} minQtyRef={minQtyRef}/>
        {   books.length >= 10 ? 
            books.map((book) => {
                return (<Book key={book.id} book={book} cartHandler={cartHandler}/>)
            }) : null
        }
        <Button disabled={disabled} type={'primary'} onClick={incrementPageNumber}> Load More </Button>
        
        <Cart totalBooks={totalBooks} totalAmount={totalAmount} totalDiscount={totalDiscount}/>
        {error}
    </Spin>
}

export default BookStore;