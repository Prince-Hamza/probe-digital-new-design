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
import FlexView from './FlexView'


function AppFace(props) {

    return (
        <Col lg={12} xs={12} md={12} style={Styles.container}>
            <br />

            <Row style={{ width: '100%' }}>
                <Col style={Styles.column1} lg={6} xs={12} md={12} >
                    <div className='mainTitleWrap'>
                        <p className={'mainTitle'}>
                            Discover People &
                            Corporate Connections
                        </p>
                    </div>

                    <div style={Styles.buttonWrap} >
                        <Button style={Styles.button} >
                            Sign up Free Today
                        </Button>
                    </div>


                    <div style={Styles.trustWrap} >
                        <p style={themeStyles.heading2}>
                            Trusted by companies all over the world
                        </p>
                    </div>






                    <FlexView>


                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={procurement} />
                                <div style={Styles.brandText}>   Procurement Department  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={law} />
                                <div style={Styles.brandText}>   Law Enforcement  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={hiring} />
                                <div style={Styles.brandText}>   Hiring Organization  </div>
                            </Row>
                        </Col>


                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={firms} />
                                <div style={Styles.brandText}>   Audit Firms  </div>
                            </Row>
                        </Col>


                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap}>
                                <Image style={Styles.brandName} src={banks} />
                                <div style={Styles.brandText}>   Bank's KYC  </div>
                            </Row>
                        </Col>


                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={security} />
                                <div style={Styles.brandText}>   Security Organization  </div>
                            </Row>
                        </Col>

                    </FlexView>



                    {/* <div className={'iconsRow'}>
                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={procurement} />
                                <div style={Styles.brandText}>   Procurement Department  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={law} />
                                <div style={Styles.brandText}>   Law Enforcement  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}> 
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={hiring} />
                                <div style={Styles.brandText}>   Hiring Organization  </div>
                            </Row>
                        </Col>


                    </div> */}



                    {/* <div className={'iconsRow'}>
                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={firms} />
                                <div style={Styles.brandText}>   Audit Firms  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap}>
                                <Image style={Styles.brandName} src={banks} />
                                <div style={Styles.brandText}>   Bank's KYC  </div>
                            </Row>
                        </Col>

                        <Col lg={4} xs={12} md={12} className={'iconItemCol'}>
                            <Row style={Styles.brandWrap} >
                                <Image style={Styles.brandName} src={security} />
                                <div style={Styles.brandText}>   Security Organization  </div>
                            </Row>
                        </Col>
                    </div> */}

                </Col>

                <Col style={Styles.column2} lg={6} xs={12} md={12}>
                    <Image className={'primaryIllustration'} src={Isomorphic} />
                </Col>


            </Row>

            <br />
            <br />
        </Col>

    );
}

export default AppFace

const Styles = ({
    container: {
        height: 'auto',
        // background: 'linear-gradient(140deg, rgba(4,102,209,1) 0%, rgba(0,209,169,1) 100%)',
        background: 'linear-gradient(99.78deg, #0466D1 0%, #00D1A9 152.3%)'

    },
    column1: {
        height: 'auto',
        textAlign: 'left',
        padding: '0px',
        ...Content.colCenterLeft,
    },
    column2: {
        height: 'auto',
        textAlign: 'left',
        ...Content.colCentrify
    },
    brandWrap: {
        width: '90%',
        padding: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    brandName: {
        width: '75px',
        height: '48px',
        marginBottom: '0px',
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
        marginBottom: '0px'
    },
    buttonWrap: {
        width: '90%',
        marginBottom: '0px',
        marginLeft: '11%',
        padding: '40px',
        ...Content.colCenterLeft
    },
    brandsWrap: {
        width: '100%',
        marginLeft: '0px',
        padding: '0px',
        ...Content.colCenterLeft
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
    },

    iconItemCol: {
        marginBottom: '0px',
        marginLeft: '0px',
        padding: '0px',
        ...Content.colCenterLeft
    },
    trustWrap: {
        textAlign: 'left',
        width: '95%',
        padding: '40px',
        marginLeft: '11%',
        marginBottom: '0px'
    },
    iconsRow: {
        width: '100%',
        marginLeft: '11%',
        padding: '40px',
    }
})