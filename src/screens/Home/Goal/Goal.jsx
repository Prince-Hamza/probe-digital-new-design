import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import underline from '../../../images/customUnderline.png'
import { Content } from '../../../styles/styles';
import Isomorphic from '../../../images/Goal/isomorphic.png'

function Goal() {

    return (
        <Row style={{ ...Styles.container, ...Styles.header }}>

            <Col lg={7}>
                <span style={{ marginBottom: '35px' }} />

                <Row style={{ ...themeStyles.title, ...Styles.container }}>
                    Our Goal
                </Row>

                <Row style={{ ...themeStyles.underline, ...Styles.container, marginBottom: '25px' }}>
                    <Image className={'underline'} src={underline} />
                </Row>

                {/* <Row style={{ ...themeStyles.subTitle, ...Styles.container }}>
                    <p style={{ textAlign: 'left' }}> The end-to-end background intelligence program </p>
                </Row> */}

                <Row>
                    <div style={Styles.textWrap}>
                        <p style={{ textAlign: 'left', fontFamily: 'poppins', fontWeight: 400 }} >
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

export default Goal

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