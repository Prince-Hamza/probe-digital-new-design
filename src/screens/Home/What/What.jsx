import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import underline from '../../../images/customUnderline.png'
import whatWeDoInfo from '../../../info/what.json'

function What(props) {
    return (
        <Row style={{ ...themeStyles.container }}>
            <span style={{ marginBottom: '50px' }} />
            <Row style={themeStyles.title}> What We Do </Row>
            <Row style={themeStyles.container}>
                <Image className={'underline'} src={underline} />
            </Row>

            <Row style={{ ...themeStyles.container, marginBottom: '80px' }}>
                Probe Digital is designed to ease the burden of trying to understand the links between people, companies and other entities.
                Our team of experts come from a broad field of Data Scientists, Anti-Money Laundering experts, Auditors, Employee Recruitment and Data Analysts.
            </Row>

            <Row style={themeStyles.listWrap} >
                {whatWeDoInfo.map((item) => {
                    return (
                        <Col lg={3} md={3} xs={12} style={themeStyles.listItem}>
                            <Image src={require(`../../../images/what/${item.image}.png`)} style={themeStyles.listItemIcon} />
                            <p style={themeStyles.listItemText} > {item.name} </p>
                            <p style={themeStyles.listItemPara}> {item.description} </p>
                        </Col>
                    )
                })}
            </Row>
        </Row>
    )
}

export default What;