import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import toggle from '../../../images/dashboard/toggle.png'
import toggleBlue from '../../../images/dashboard/toggleBlue.png'

function Layout(props) {
    return (
        <Col lg={12}>

            <Row lg={12} style={Styles.header} >
                <Col lg={6}>
                    <p style={{ ...themeStyles.heading1, color: '#222' }} > Dashboard </p>
                </Col>
                <Col lg={6} >
                    <p style={{ ...themeStyles.heading1, color: '#222' }} > Dashboard </p>
                </Col>
            </Row>



            <Col lg={12} style={Styles.pageRemain}>

                <Row style={Styles.filtersWrap}>
                    <div style={Styles.filterText}>
                        First Name
                    </div>

                    <input style={Styles.filterInput} />

                    <div style={Styles.filterText}>
                        Surname
                    </div>

                    <input style={Styles.filterInput} />


                    <div style={Styles.filterText}>
                        Age
                    </div>
                </Row>

                <br />

                <div style={Styles.bar}>
                    <div style={{ ...themeStyles.heading2, color: '#222' }}> Search Results </div>
                </div>



                <Row style={Styles.bar}>
                    <Col lg={4} >
                        <Row style={{ width: '100%' }} >
                            <Form.Control type={'text'} style={Styles.checkbox} />

                            <Col lg={2} >
                                <Image src={toggleBlue} style={{ width: '10px', height: '10px' }} />
                            </Col>


                            <Col lg={2} >
                                <Image src={toggleBlue} style={{ width: '10px', height: '10px' }} />
                            </Col>


                            <Col lg={2} >
                                <Image src={toggleBlue} style={{ width: '10px', height: '10px' }} />
                            </Col>


                            <Col lg={2} >
                                <Image src={toggleBlue} style={{ width: '10px', height: '10px' }} />
                            </Col>




                            <Col lg={2} >
                                <Image src={toggleBlue} style={{ width: '10px', height: '10px' }} />
                            </Col>




                        </Row>
                    </Col>
                </Row>


                <Col lg={12} style={{ backgroundColor: 'white', width: '100%', height: '700px', padding: '15px' }} >
                    <Row style={{ width: '100%' }} >
                        <Col lg={1}>
                            <Form.Control type={'text'} style={Styles.checkbox} />
                        </Col>
                    </Row>
                </Col>

            </Col>

        </Col>
    );
}

export default Layout


const Styles = ({
    header: {
        height: '80px',
        backgroundColor: 'white',
        ...Content.rowSpaceBetween,
        padding: '0px'
    },
    filtersWrap: {
        background: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid #E9E9E9',
        width: '100%',
        height: '104px',
        marginLeft: '0px',
        ...Content.rowCentrify
    },
    filterInput: {
        width: '20%',
        height: '56px',
        border: '1px solid #E9E9E9',
        bordeRadius: '8px',
        outline: 'none'
    },
    filterText: {
        ...themeStyles.heading3,
        width: '120px'
    },
    pageRemain: {
        padding: '25px',
        // border: 'solid 1px'
    },
    bar: {
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        padding: '15px',
        border: '1px solid #E9E9E9',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '0px',
        borderRadius: '10px'
    },
    checkbox: {
        width: '22px',
        height: '22px'
    }
})