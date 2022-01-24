import {Card, Col, Row, Statistic} from "antd";

const Cart = (props) => {
    return (
        <Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Statistic title="Total Books to Order" value={`${props.totalBooks} Pc`} />
                </Col>
                <Col span={8}>
                    <Statistic title="Total Discount" value={`${props.totalDiscount} INR`}  />
                </Col>
                <Col span={8}>
                    <Statistic title="Total Amount" value={`${props.totalAmount} INR`} />
                </Col>
            </Row>
        </Card>
    )
}
export default Cart;