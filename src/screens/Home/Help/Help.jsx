import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import underline from '../../../images/customUnderline.png'
import helpInfo from '../../../info/help.json'
import { themeStyles } from '../../../styles/theme'
import './mobile.css'
import { Content } from '../../../styles/styles'


function Help() {
    return (
        <Row style={{ ...themeStyles.container2, marginBottom: '150px' }}>
            <span style={{ marginBottom: '50px' }} />


            <Row style={Styles.centerWrap}>
                <div style={themeStyles.sectionTitle}> Who We Help </div>
            </Row>


            <Col lg={12} xs={12} style={Styles.centerWrap} >
                <Image className='underline' src={underline} />
            </Col>

            <Row style={{ ...themeStyles.centerWrap, marginBottom: '80px' }}>
                <p style={{ ...themeStyles.description, textAlign: 'center' }} >
                    We attract clients who value our quality of service, professionalism, creativity and expertise. Our clientele includes national and international law firms, corporations, financial institutions and private individuals.
                </p>
            </Row>

            <Row style={themeStyles.listWrap}>
                {helpInfo.map((item) => {
                    return (
                        <Col lg={3} md={3} xs={12} style={{ ...themeStyles.listItem, padding: '15px' }}>
                            <Image src={require(`../../../images/help/${item.image}.png`)} style={Styles.listItemImage} />
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


const Styles = ({
    centerWrap: {
        marginLeft: '0px',
        textAlign: 'center',
        width: '100%',
        ...Content.rowCentrify
    },
    listItemImage: {
        ...themeStyles.listItemIcon,
        backgroundColor: 'rgba(4, 102, 209, 0.05)',
        padding: '20px'
    }
})