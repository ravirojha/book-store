import {Button, Card, Col, InputNumber, Row} from "antd";

const Filter = () => {
    return <Card>
        <Row>
           <Col span={6}>
               <InputNumber addonBefore={'Min Price'} value={12} />
           </Col>
            <Col span={6}>
                <InputNumber addonBefore={'Max Price'} value={50} />
            </Col>
            <Col span={6}>
                <InputNumber addonBefore={'Min Qty'} value={1} />
            </Col>
            <Col span={6}>
                <Button type={"primary"}>Filter</Button>
            </Col>
        </Row>
    </Card>
}

export default Filter;