import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import underline from '../../../images/customUnderline.png'
import { Content } from '../../../styles/styles';
import Isomorphic from '../../../images/services/isomorphic.png'

function Services() {

    return (
        <Row style={{ ...Styles.container, ...Styles.header }}>

            <Col lg={7}>
                <span style={{ marginBottom: '35px' }} />

                <Row style={{ ...themeStyles.sectionTitle, ...Styles.container }}>
                    Our Services
                </Row>

                <Col lg={12} xs={12}>
                    <Image className='leftUnderline' src={underline} />
                </Col>

                {/* <Row style={{ ...themeStyles.subTitle, ...Styles.container }}>
                    <p style={{ textAlign: 'left' }}> The end-to-end background intelligence program </p>
                </Row> */}

                <Row>
                    <div style={Styles.textWrap}>
                        <p style={{ textAlign: 'left', ...themeStyles.description }} >
                            B2B or P2P connections & Network Analysis
                            Discovering unsavoury person in a network
                            Properties in Companies name & Network Analysis
                        </p>
                    </div>
                </Row>
            </Col>

            <Col lg={5} >
                <Image style={{ width: '100%', height: '425px' }} src={Isomorphic} />
            </Col>


        </Row>
    )

}

export default Services

const Styles = ({
    container: {
        width: '100%',
        marginBottom: '5px',
        ...Content.rowLeftStart
    },
    header: {
        marginLeft: '0px',
        padding: '15px'
    },
    textWrap: {
        width: '100%'
    }
})