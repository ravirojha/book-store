import {Card, Avatar, InputNumber, Row, Col} from "antd";

import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import {FC, useState} from "react";

const { Meta } = Card;

export interface IBook{
    id: number;
    title: string;
    description: string;
    totalQuantity: number;
    pricePerQty: number
}
interface IProps {
    book: IBook;
    cartHandler: any;
}



const Book: FC<IProps> = ({book, cartHandler}) => {
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [totalPrice, setOrderPrice] = useState(0);

    function handleIncrease() {
        if(orderQuantity < book.totalQuantity) {
        const pricePerQuantity : number = book.pricePerQty ? book.pricePerQty : 0;
        const newOrderQuantity = orderQuantity + 1;
        setOrderQuantity(newOrderQuantity);
        setOrderPrice(newOrderQuantity * pricePerQuantity);
        cartHandler(pricePerQuantity, 'increase');
        }
    }

    function handleDecrease() {
        if(orderQuantity > 0) {
        const pricePerQuantity : number = book.pricePerQty ? book.pricePerQty : 0;
        const newOrderQuantity = orderQuantity - 1;
        const newOrderPrice = newOrderQuantity * pricePerQuantity;
        setOrderQuantity(newOrderQuantity);
        setOrderPrice(newOrderPrice);
        cartHandler(pricePerQuantity, 'decrease');
        }
    }

    return <>
        <Card
            style={{ width: '80%', margin: '20px' }}
            actions={[
                    <PlusOutlined  onClick={handleIncrease}/>,
                    <InputNumber  value={orderQuantity} />,
                    <MinusOutlined onClick={handleDecrease}/>
            ]}
        >
            <Row>
                <Col span={4}>ID: {book.id}</Col>
                <Col span={8}>Name: {book.title}</Col>
                <Col span={12}>Description: {book.description}</Col>
            </Row>
            <Row>
                <Col span={12}>Total Quantity: {book.totalQuantity} Pc</Col>
                <Col span={12}>Price per Qty: INR {book.pricePerQty}</Col>
            </Row>

            <Row>
                <Col span={12}>Order Quantity: {orderQuantity} Pc</Col>
                <Col span={12}>Total Price: INR {totalPrice}</Col>
            </Row>
        </Card>
    </>
}
export default Book;