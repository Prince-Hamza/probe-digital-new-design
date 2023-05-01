import React, { useState } from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import HiFrame from '../../../images/dashboard/HiFrame.png'
import ResultLine from '../../../images/dashboard/ExportLine.png'
import { headings } from '../../../info/dashVariation3Headings'
import tableInfo from '../../../info/tableInfo.json'
import './mobile.css'
import Header from '../components/Header';

function Layout(props) {


    const [selecteds, setSelecteds] = useState([])

    const checkBoxClick = (index) => {
        // alert(index)
        // if (selecteds.includes(index)) {
        //     alert(`splice`)
        //     selecteds.splice(index, 1)
        // } else if (!selecteds.includes(index)) {
        //     alert(`push`)
        //     selecteds.push(index)
        // }
        // alert(`s: ${selecteds}`)
        // setSelecteds([...selecteds])
    }

    return (
        <Col lg={12}>


            <Header />
            <br />

            <Col lg={12} xs={12} style={Styles.pageRemain}>

                <Row style={Styles.filtersWrap}>
                    <Col lg={6} xs={12}  >
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '6px', ...themeStyles.heading3 }} >
                                First Name
                            </div>
                            <input style={Styles.filterInput} value={'James'} />
                        </Row>
                    </Col>

                    <Col lg={6} xs={12} >
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '6px', ...themeStyles.heading3 }} >
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
                    {tableInfo.map((item, index) => {
                        return (
                            <Row className={'tableDataWrap'} >

                                <Col lg={1} xs={12}  >
                                    <Form.Control type={'checkbox'} checked={true} onClick={() => { checkBoxClick(index) }} style={{ ...Styles.checkbox, marginRight: '28px' }} />
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
    )
}

export default Layout


const Styles = ({

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
        width: '40%',
        height: '40px',
        border: '1px solid #E9E9E9',
        bordeRadius: '8px',
        outline: 'none',
        ...themeStyles.smallText
    },
    filterText: {
        width: '120px'
    },
    pageRemain: {
        padding: '10px',
        height: 'auto',
        ...Content.colCenterLeft
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
        marginLeft: '10px',
        marginRight: '10px',
        ...Content.rowCentrify
    }
})