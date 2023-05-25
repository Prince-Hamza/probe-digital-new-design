import React, { useState } from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import ResultLine from '../../../images/dashboard/ExportLine.png'
import tableInfo from '../../../info/tableInfo.json'
import './mobile.css'
import Header from '../components/Header';
import firstName from '../../../images/dashboard/firstName.png'
import surname from '../../../images/dashboard/surname.png'
import dob from '../../../images/dashboard/Dob.png'
import Age from '../../../images/dashboard/Age.png'
import currentCompany from '../../../images/dashboard/curentOrganization.png'
import prevCompany from '../../../images/dashboard/previousOrganization.png'
import ReactMultiRangeSlider from '../../../components/MultiRangeSlider/multirangeslider.tsx'



function Layout(props) {

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

            <Col lg={12} xs={12} md={12} style={Styles.pageRemain}>

                <Row style={Styles.filtersWrap}>
                    <Col lg={4} xs={12} md={12}>
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '6px', ...themeStyles.heading3 }} >
                                First Name
                            </div>
                            <input style={Styles.filterInput} value={'James'} />
                        </Row>
                    </Col>

                    <Col lg={4} xs={12} md={12} >
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '160px', marginTop: '6px', ...themeStyles.heading3 }} >
                                Surname
                            </div>
                            <input style={Styles.filterInput} value={'Smithson'} />
                        </Row>
                    </Col>




                    <Col lg={4}>
                        <Row style={{ width: '100%' }} >
                            <div style={{ width: '60px', marginTop: '6px', marginRight: '10px', ...themeStyles.heading3 }} >
                                Age
                            </div>
                            <ReactMultiRangeSlider
                                style={Styles.slider}
                                min={0}
                                max={100}
                                step={2000}
                                values={[10, 20]}
                                handleChange={(e) => {
                                    let vals = [e.minValue, e.maxValue]
                                    // console.log(`slider val : ${vals}`)
                                    // setValues(vals)
                                    // //sliderFilter(vals[0], vals[1])
                                    // console.log(`filter selected Data (val 0 : ${vals[0]} ,val 1 : ${vals[1]})`)
                                    // // alert('filter selected')
                                    // filterSelecteData(vals[0], vals[1])
                                }}
                            />
                        </Row>
                    </Col>

                </Row>



                <Row style={Styles.bar}>
                    <Image src={ResultLine} style={{ width: '30px', height: '20px' }} />
                    <div style={{ ...themeStyles.heading2, color: '#222', width: '200px' }}> Search Results </div>
                </Row>


                {/* 
                <Row style={{ backgroundColor: '#EAEBF0' }} className={'tableDataWrap'} >
                    <Col lg={1} xs={12} md={12}>
                        <Form.Control type={'checkbox'} checked={true} style={{ ...Styles.checkbox, marginRight: '28px' }} />
                    </Col>
                    <Col lg={1} xs={12} md={12} style={{ ...Styles.headingItem, }}>
                        <Row>
                            <Image src={firstName} />
                            <div style={{ textAlign: 'left', ...themeStyles.tableText }}> {'first name'}  </div>
                        </Row>
                    </Col>
                </Row> */}






                <Row style={{ ...Styles.bar, ...Styles.headingBar }}>
                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={firstName} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > First Name </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={surname} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > Surname </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={dob} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > D.OB </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={Age} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > Age </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={currentCompany} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > Current Company </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col style={Styles.headingBarItem} lg={2} xs={12} md={12}>
                        <Row style={{ width: '100%', padding: '0px' }}>
                            <Col lg={3} style={{ ...Content.colCenterLeft }}>
                                <Image src={prevCompany} />
                            </Col>

                            <Col lg={9} style={{ ...Content.colCenterLeft, padding: '0px' }} >
                                <div style={{ ...themeStyles.smallText3, textAlign: 'left' }} > Previous Company </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>



                <Col lg={12} xs={12} md={12} style={{ padding: '0px', ...Content.colCentrify }}>
                    {tableInfo.map((item, index) => {
                        return (
                            <Row className={'tableDataWrap'} >
                                {/* 
                                <Col lg={2} xs={12} md={12}  >
                                    <Form.Control type={'checkbox'} checked={true} onClick={() => { checkBoxClick(index) }} style={{ ...Styles.checkbox, marginRight: '28px' }} />
                                </Col> */}

                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.firstName} </div>
                                </Col>

                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.surname} </div>
                                </Col>


                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }}> {item.dob}  </div>
                                </Col>


                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.age} </div>
                                </Col>


                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem, }}>
                                    <div style={{ textAlign: 'left', ...themeStyles.tableText }} > {item.currentCompany} </div>
                                </Col>


                                <Col lg={2} xs={12} md={12} style={{ ...Styles.headingItem, }}>
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
        marginBottom: '13px',
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
    headingBar: {
        backgroundColor: '#F8F9FB',

    },
    checkbox: {
        width: '22px',
        height: '22px'
    },
    headingItem: {
        marginLeft: '0px',
        marginRight: '0px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '10px'
    },
    slider: {
        width: '70%',
        boxShadow: '0px 0px 0px 0px',
        color:'blue',
    },

})