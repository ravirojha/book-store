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
    book?: IBook
}

const Book: FC<IProps> = ({book={}}) => {
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [totalPrice, setOrderPrice] = useState(0);

    function handleIncrease() {
        const pricePerQuantity : number = book.pricePerQty ? book.pricePerQty : 0;
        const newOrderQuantity = orderQuantity + 1;
        setOrderQuantity(newOrderQuantity);
        setOrderPrice(newOrderQuantity * pricePerQuantity);
    }

    function handleDecrease() {
        const pricePerQuantity : number = book.pricePerQty ? book.pricePerQty : 0;
        const newOrderQuantity = orderQuantity - 1;
        setOrderQuantity(newOrderQuantity);
        setOrderPrice(newOrderQuantity * pricePerQuantity);
    }

    return <>
        <Card
            style={{ width: '80%', margin: '20px' }}
            actions={[
                    <PlusOutlined onClick={handleIncrease}/>,
                    <InputNumber disabled={orderQuantity === book.totalQuantity} value={orderQuantity} />,
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