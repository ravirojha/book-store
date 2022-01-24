import {Button, Card, Col, InputNumber, Row} from "antd";

const Filter = (props) => {
  
    return <Card>
        <Row>
           <Col span={6}>
               <InputNumber addonBefore={'Min Price'}  ref={props.minPriceRef}/>
           </Col>
            <Col span={6}>
                <InputNumber addonBefore={'Max Price'}  ref={props.maxPriceRef}/>
            </Col>
            <Col span={6}>
                <InputNumber addonBefore={'Min Qty'}  ref={props.minQtyRef}/>
            </Col>
            <Col span={6}>
                <Button type={"primary"} onClick={props.handleFilter}>Filter</Button>
            </Col>
        </Row>
    </Card>
}

export default Filter;