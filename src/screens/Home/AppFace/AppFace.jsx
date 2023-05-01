import React from 'react'
import { Button, Col, Row, Image, Form } from 'react-bootstrap'
import { Content } from '../../../styles/styles'
import firms from '../../../images/main/firms.png'
import banks from '../../../images/main/banks.png'
import hiring from '../../../images/main/hiring.png'
import law from '../../../images/main/law.png'
import procurement from '../../../images/main/procurement.png'
import security from '../../../images/main/security.png'
import { palleteV1 } from '../../../info/colors';
import Isomorphic from '../../../images/Connected-world-amico-homepage-logo.png'
import './mobile.css'
import { themeStyles } from '../../../styles/theme'


function AppFace(props) {
    return (
        <Col lg={12} xs={12} style={Styles.container}>
            <br />
            <Row style={{ width: '100%' }} >
                <Col style={Styles.column} lg={6} xs={12}>

                    <div style={{ textAlign: 'left' }} >
                        <p className={'mainTitle'} >
                            Discover People &
                            Corporate Connections
                        </p>
                    </div>

                    <div style={Styles.buttonWrap} >
                        <Button style={Styles.button} >
                            Sign up Free Today
                        </Button>
                    </div>


                    <div style={{ textAlign: 'left', width: '95%', padding: '5px', marginLeft: '10px' }} >
                        <p style={themeStyles.heading2}>
                            Trusted by companies all over the world
                        </p>
                    </div>

                    <Row style={{ width: '100%' }} >

                        <Col lg={4} xs={12} style={{ ...Styles.iconItemCol }} >
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={procurement} />
                                <div style={Styles.brandText}>   Procurement Department  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={law} />
                                <div style={Styles.brandText}>   Law Enforcement  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} style={Styles.iconItemCol} >
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={hiring} />
                                <div style={Styles.brandText}>   Hiring Organization  </div>
                            </Row>
                        </Col>

                    </Row>




                    <Row style={{ width: '100%' }} >

                        <Col lg={4} xs={12} style={{ ...Styles.iconItemCol }} >
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={firms} />
                                <div style={Styles.brandText}>   Audit Firms  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} style={{ ...Styles.iconItemCol }}>
                            <Row style={Styles.brandWrap}>
                                <Image style={Styles.brandName} src={banks} />
                                <div style={Styles.brandText}>   Bank's KYC  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} style={Styles.iconItemCol} >
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={security} />
                                <div style={Styles.brandText}>   Security Organization  </div>
                            </Row>
                        </Col>

                    </Row>


                </Col>

                <Col style={Styles.column} lg={6} xs={12} >
                    <Image className={'primaryIllustration'} src={Isomorphic} />
                </Col>
            </Row>
        </Col>

    );
}

export default AppFace

const Styles = ({
    container: {
        height: 'auto',
        background: 'linear-gradient(140deg, rgba(4,102,209,1) 0%, rgba(0,209,169,1) 100%)'
    },
    column: {
        height: 'auto',
        textAlign: 'left',
        ...Content.colCentrify,
        // border: 'solid 1px'
    },

    brandListWrap: {
        padding: '10px',
        marginBottom: '5px',
    },
    iconItemCol: {
        ...Content.colTopLeft,
        marginBottom: '25px'
        // border: 'solid 1px'
    },
    brandWrap: {
        marginBottom: '5px',
        width: '100%',
        // border: 'solid 1px red',
        padding: '0px',
        ...Content.rowLeftStart
    },
    brandName: {
        width: '75px',
        height: '48px',
        marginLeft: '50px',
        marginBottom: '5px',
        // border: 'solid 1px'
    },
    brandText: {
        color: 'white',
        width: '40%',
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        // border: 'solid 1px'
    },
    trustText: {

        font: '24px poppins',
        color: 'white',
        marginBottom: '25px'
    },
    buttonWrap: {
        width: '90%',
        marginBottom: '25px',
        ...Content.colCenterLeft
    },
    brandsWrap: {
        width: '100%',
        marginLeft: '5px',
        // border: 'solid 1px'
        // ...Content.colCenterLeft
    },
    button: {
        width: '230px',
        height: '48px',
        backgroundColor: palleteV1.green,
        ...themeStyles.heading3
    },
    isomorphic: {
        width: '470px',
        height: '450px'
    }
})