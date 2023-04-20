import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import HiFrame from '../../../images/dashboard/HiFrame.png'
import ResultLine from '../../../images/dashboard/ExportLine.png'
import { headings } from '../../../info/dashVariation3Headings'
import tableInfo from '../../../info/tableInfo.json'

function Layout(props) {

    return (
        <Col lg={12}>

            <Row lg={12} style={Styles.header} >
                <Col lg={6} style={{ ...Content.colTopLeft, }} >
                    <p style={{ ...themeStyles.heading1, color: '#222', marginLeft: '15px' }}> Dashboard </p>
                </Col>
                <Col lg={6} style={Content.rowCenterEnd}>
                    <Image style={{ cursor: 'pointer' }} src={HiFrame} />
                </Col>
            </Row>



            <Col lg={12} style={Styles.pageRemain}>

                <Row style={Styles.filtersWrap}>
                    <div style={Styles.filterText}>
                        First Name
                    </div>

                    <input style={Styles.filterInput} value={'James'} />

                    <div style={Styles.filterText}>
                        Surname
                    </div>

                    <input style={Styles.filterInput} value={'Smithson'} />

                </Row>

                <br />

                <Row style={Styles.bar}>
                    <Image src={ResultLine} style={{ width: '30px', height: '20px' }} />
                    <div style={{ ...themeStyles.heading2, color: '#222', width: '200px' }}> Search Results </div>
                </Row>



                <Row style={{ ...Styles.bar, padding: '15px', overflow:'auto' }}>
                    <Col lg={12} >
                        <Row style={{ width: '100%' }}>

                            <Form.Control type={'text'} style={Styles.checkbox} />
                            {headings.map((item) => {
                                return (
                                    <Row style={Styles.headingItem} >
                                        <Image src={item.icon} style={{ width: '40px', height: '20px' }} />
                                        <div style={{ textAlign: 'left', width: '75px', font: '10px poppins' }} > {item.heading} </div>
                                    </Row>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>



                {tableInfo.map((item) => {
                    return (
                        <Row style={{ ...Styles.bar, padding: '15px', width: '100%', overflow: 'auto' }} >
                            <Form.Control type={'text'} style={{ ...Styles.checkbox, marginRight: '28px' }} />

                            <div style={{ ...Styles.headingItem }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }} > {item.firstName} </div>
                            </div>

                            <div style={{ ...Styles.headingItem, }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }} > {item.surname} </div>
                            </div>


                            <div style={{ ...Styles.headingItem, }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }}> {item.dob}  </div>
                            </div>


                            <div style={{ ...Styles.headingItem, }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }} > {item.age} </div>
                            </div>


                            <div style={{ ...Styles.headingItem, }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }} > {item.currentCompany} </div>
                            </div>


                            <div style={{ ...Styles.headingItem, }}>
                                <div style={{ textAlign: 'left', width: '75px', ...themeStyles.tableText }} > {item.previousCompany} </div>
                            </div>

                        </Row>
                    )
                })}



                {/* 
                <Col lg={12} style={{ backgroundColor: 'white', width: '100%', height: '700px', padding: '15px' }} >
                    <Row style={{ width: '100%' }} >
                        <Col lg={1}>
                            <Form.Control type={'text'} style={Styles.checkbox} />
                        </Col>
                    </Row>
                </Col> */}

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
        padding: '0px',
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
    },
    headingItem: {
        // border: 'solid 1px',
        width: '150px',
        marginLeft: '10px',
        marginRight: '10px',
        ...Content.rowCentrify
    }
})