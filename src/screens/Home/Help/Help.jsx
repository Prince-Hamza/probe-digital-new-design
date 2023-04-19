import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import underline from '../../../images/customUnderline.png'
import helpInfo from '../../../info/help.json'
import { themeStyles } from '../../../styles/theme'
import './mobile.css'


function Help() {
    return (
        <Row style={{ ...themeStyles.container, marginBottom: '150px' }}>
            <span style={{ marginBottom: '50px' }} />
            <Row style={themeStyles.sectionTitle}> Who We Help </Row>

            <Col lg={12} xs={12}>
                <Image className='underline' src={underline} />
            </Col>

            <Row style={{ ...themeStyles.container, marginBottom: '80px' }}>
                <p style={themeStyles.description} >
                    We attract clients who value our quality of service, professionalism, creativity and expertise. Our clientele includes national and international law firms, corporations, financial institutions and private individuals.
                </p>
            </Row>

            <Row style={themeStyles.listWrap}>
                {helpInfo.map((item) => {
                    return (
                        <Col lg={3} md={3} xs={12} style={themeStyles.listItem}>
                            <Image src={require(`../../../images/help/${item.image}.png`)} style={themeStyles.listItemIcon} />
                            <p style={themeStyles.listItemText} > {item.name} </p>
                            <p> {item.description} </p>
                        </Col>
                    )
                })}
            </Row>

        </Row>
    )
}

export default Help