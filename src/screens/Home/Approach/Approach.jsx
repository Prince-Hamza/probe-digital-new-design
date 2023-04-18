import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { themeStyles } from '../../../styles/theme'
import underline from '../../../images/customUnderline.png'
import { Content } from '../../../styles/styles'
import Isomorphic from '../../../images/Approach/isomorphic.png'
import { onMobile } from '../../../info/mobile'
import './mobile.css'


function illustration() {
    return (
        <Image style={{ width: '90%', height: '445px' }} src={Isomorphic} />
    )
}


function description() {
    return (
        <Row>
            <div style={Styles.textWrap}>
                <p style={{ textAlign: 'left', fontFamily: 'poppins', fontWeight: 400 }} >
                    B2B or P2P connections & Network Analysis
                    Discovering unsavoury person in a network
                    Properties in Companies name & Network Analysis
                </p>
            </div>
        </Row>
    )
}

function Approach() {

    const [isMobile, setIsMobile] = useState(onMobile())
    window.onresize = function () { setIsMobile(onMobile()) }

    return (
        <Row style={{ ...Styles.container, ...Styles.header }}>


            <Col lg={6} xs={12} >
                {isMobile ? <></> : illustration()}
            </Col>

            <Col lg={6} xs={12}>
                <span style={{ marginBottom: '35px' }} />

                <Row style={{ ...Styles.container, ...themeStyles.title }}>
                    Our Approach
                </Row>

                <Row style={{ ...themeStyles.underline, ...Styles.container, marginBottom: '25px' }}>
                    <Image className={'underline'} src={underline} />
                </Row>

                {description()}


                <Col lg={6} xs={12} >
                    {isMobile ? illustration() : <></>}
                </Col>


            </Col>
        </Row>
    )

}

export default Approach

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