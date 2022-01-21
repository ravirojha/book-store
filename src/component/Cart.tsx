import {Card, Col, Row, Statistic} from "antd";

const Cart = () => {
    return (
        <Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Statistic title="Total Books to Order" value={`0 Pc`} />
                </Col>
                <Col span={8}>
                    <Statistic title="Total Discount" value={`0 INR`}  />
                </Col>
                <Col span={8}>
                    <Statistic title="Total Amount" value={`0 INR`} />
                </Col>
            </Row>
        </Card>
    )
}
export default Cart;