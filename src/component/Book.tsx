import {Card, Avatar, InputNumber, Row, Col} from "antd";

import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import {FC} from "react";

const { Meta } = Card;

export interface IBook{
    title: string;
    description: string;
    totalQuantity: number;
    pricePerQty: number
}
interface IProps {
    book?: IBook
}

const Book: FC<IProps> = ({book={}}) => {
    const {
        title = "Book Name",
        description = "This is really nice book",
        totalQuantity = 10,
        pricePerQty = 135
    } = book;
    return <>
        <Card
            style={{ width: '80%', margin: '20px' }}
            actions={[
                    <PlusOutlined />,
                    <InputNumber disabled={true} value={0} />,
                    <MinusOutlined/>
            ]}
        >
            <Row>
                <Col span={12}>Name: {title}</Col>
                <Col span={12}>Description: {description}</Col>
            </Row>
            <Row>
                <Col span={12}>Total Quantity: {totalQuantity} Pc</Col>
                <Col span={12}>Price per Qty: INR {pricePerQty}</Col>
            </Row>

            <Row>
                <Col span={12}>Order Quantity: {0} Pc</Col>
                <Col span={12}>Total Price: INR {0}</Col>
            </Row>
        </Card>
    </>
}
export default Book;