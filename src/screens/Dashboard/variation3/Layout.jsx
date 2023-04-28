import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import HiFrame from '../../../images/dashboard/HiFrame.png'
import ResultLine from '../../../images/dashboard/ExportLine.png'
import { headings } from '../../../info/dashVariation3Headings'
import tableInfo from '../../../info/tableInfo.json'
import './mobile.css'

function Layout(props) {

    return (
        <Col lg={12}>

            <Row lg={12} xs={12} style={Styles.header} >
                <Col lg={6} xs={6} style={{ ...Content.colTopLeft, }} >
                    <p style={{ ...themeStyles.heading1, color: '#222', marginLeft: '15px' }}> Dashboard </p>
                </Col>
                <Col lg={6} xs={6} style={Content.rowCenterEnd}>
                    <Image style={{ cursor: 'pointer' }} src={HiFrame} />
                </Col>
            </Row>

            <br />


            <Col lg={12} xs={12} style={Styles.pageRemain}>

                <Row style={Styles.filtersWrap}>
                    <Col lg={6} xs={12}  >
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '9px' }} >
                                First Name
                            </div>
                            <input style={Styles.filterInput} value={'James'} />
                        </Row>
                    </Col>

                    <Col lg={6} xs={12} >
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '9px' }} >
                                Surname
                            </div>
                            <input style={Styles.filterInput} value={'Smithson'} />
                        </Row>
                    </Col>

                </Row>

                <br />

                <Row style={Styles.bar}>
                    <Image src={ResultLine} style={{ width: '30px', height: '20px' }} />
                    <div style={{ ...themeStyles.heading2, color: '#222', width: '200px' }}> Search Results </div>
                </Row>


                <Col lg={12} xs={12} style={{ padding: '10px' }} >

                    {tableInfo.map((item) => {
                        return (
                            <Row className={'tableDataWrap'} >

                                <Col lg={1} xs={12}  >
                                    <Form.Control type={'text'} style={{ ...Styles.checkbox, marginRight: '28px' }} />
                                </Col>

                                <Col lg={1} xs={12} style={{ ...Styles.headingItem }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.firstName} </div>
                                </Col>

                                <Col lg={1} xs={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.surname} </div>
                                </Col>


                                <Col lg={1} xs={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }}> {item.dob}  </div>
                                </Col>


                                <Col lg={1} xs={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.age} </div>
                                </Col>


                                <Col lg={1} xs={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.currentCompany} </div>
                                </Col>


                                <Col lg={1} xs={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.previousCompany} </div>
                                </Col>

                            </Row>
                        )
                    })}


                </Col>



            </Col>

        </Col>
    );
}

export default Layout


const Styles = ({
    header: {
        height: 'auto',
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
        height: '40px',
        border: '1px solid #E9E9E9',
        bordeRadius: '8px',
        outline: 'none'
    },
    filterText: {
        ...themeStyles.heading3,
        width: '120px'
    },
    pageRemain: {
        padding: '10px',
        height: 'auto',
        ...Content.colCenterLeft
        // border: 'solid 1px'
    },
    bar: {
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        padding: '0px',
        border: '1px solid #E9E9E9',
       
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '0px',
        marginBottom: '3px',
        borderRadius: '10px'
    },
    checkbox: {
        width: '22px',
        height: '22px'
    },
    headingItem: {
        // border: 'solid 1px',
        marginLeft: '10px',
        marginRight: '10px',
        ...Content.rowCentrify
    }
})