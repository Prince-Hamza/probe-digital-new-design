import React from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme'
import man from '../../../images/dashboard/man.png'
import Card from '../components/Card'
import Header from '../components/Header'
import { info } from './info'
import FlexView from '../components/FlexView'

function Layout(props) {

    return (
        <Col lg={12}>

            <Header />

            <br />

            <Col lg={12} xs={12} md={12} style={Styles.pageRemain} >


                <Row style={{ marginLeft: '0px' }} className={'subHeader'}>

                    <Col lg={2} xs={12} md={12} style={{ ...Content.rowLeftStart, width: 'auto' }} >
                        <Image style={{ width: '45px', height: '45px' }} src={man} />
                    </Col>

                    <Col lg={2} xs={12} md={12} style={Styles.subHeaderItemCell}>
                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '60%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Name </div>
                            <div style={{ width: '40%', ...themeStyles.tableText }}> James </div>
                        </Row>
                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '60%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Surname </div>
                            <div style={{ width: '40%', ...themeStyles.tableText }}> Smithson </div>
                        </Row>
                    </Col>

                    <Col lg={2} xs={12} md={12} style={Styles.subHeaderItemCell} >
                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '60%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > D.O.B </div>
                            <div style={{ width: '40%', ...themeStyles.tableText }}> 1/4/2023 </div>
                        </Row>
                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '60%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Age </div>
                            <div style={{ width: '40%', ...themeStyles.tableText }}> 49 </div>
                        </Row>
                    </Col>

                    <Col lg={3} xs={12} md={12} style={Styles.subHeaderItemCell}>

                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '40%', ...themeStyles.smallText3, ...Content.rowLeftStart }}> ID Card </div>
                            <div style={{ width: '60%', ...themeStyles.tableText }}>2166 7865 </div>
                        </Row>

                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '40%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Contact </div>
                            <div style={{ width: '60%', ...themeStyles.tableText }}> London street </div>
                        </Row>
                    </Col>


                    <Col lg={3} xs={12} md={12} style={Styles.subHeaderItemCell} >
                        <Row style={Styles.spaceBetween}>
                            <div style={{ width: '30%', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Address </div>
                            <div style={{ width: '70%', ...themeStyles.tableText }}> London Street </div>
                        </Row>
                    </Col>

                </Row>





                <Col lg={12} md={12} xs={12} style={{ padding: '0px' }} >
                    <FlexView>
                        <Card info={info.card1} />
                        <Card info={info.card1} />
                        <Card info={info.card1} />
                        <Card info={info.card1} />
                    </FlexView>
                </Col>



                <Row style={{ width: '100%', height: '300px' }}>
                    <Col lg={6} xs={12} md={12} style={{ ...Content.colCenterLeft }}>
                        <Row style={{ width: '100%' }} >
                            <Button style={{ ...Styles.button, ...Styles.backButton }} > Back </Button>
                            <Button style={{ ...Styles.button, ...Styles.startOverButton }} > Start Over </Button>
                        </Row>
                    </Col>

                    <Col lg={6} xs={12} md={12} style={{ padding: '0px' }} className={'printButtonWrap'}>
                        <Button style={{ ...Styles.button, ...Styles.printButton }} > Print Pdf </Button>
                    </Col>
                </Row>


            </Col>

        </Col>
    )
}

export default Layout


const Styles = ({
    header: {
        height: 'auto',
        backgroundColor: 'white',
        ...Content.rowSpaceBetween,
        padding: '0px',
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

    subHeaderItemCell: {
        marginRight: '25px',
    },


    pageRemain: {
        padding: '20px',
        height: 'auto',
        backgroundColor: '#F5F5F5',
        ...Content.colCenterLeft,
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
    },
    cardBackground: {
        padding: '0px',
        paddingTop: '0px',
        height: 'auto',
        // border: 'solid 2px yellow',
        background: 'linear-gradient(90deg, rgba(0,188,175,1) 0%, rgba(1,152,188,1) 100%)',
        ...Content.colTopCenter
    },
    cardHead: {
        width: '100%',
        height: '50px',
        padding: '0px',
        boxShadow: '0px 0px 5px 1px lightgray',
        ...Content.rowSpaceBetween
    },
    cardRow: {
        width: '100%',
        height: '50px',
        // border: 'solid 1px lightgray',
        boxShadow: '0px 0px 5px 1px lightgray',
        backgroundColor: 'white',
        ...Content.rowCentrify
    },
    cardRowCellCol: {
        padding: '0px'
    },
    cardRowCellColRow: {
        ...Content.rowLeftStart,
        // border: 'solid 1px'
    },
    subHeaderItemKey: {
        ...themeStyles.smallText3,
        ...Content.rowLeftStart
    },
    cardCheck: {
        width: '35%',
        height: '200px',
        border: 'solid 1px'
    },
    spaceBetween: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    button: {
        marginRight: '20px',
        marginLeft: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 72px',
        gap: '8px',
        width: '245px',
        height: '60px',
        background: '#00D1A9',
        borderRadius: '10px',
        border: 'none'
    },
    backButton: {
        width: '194px',
        border: '1px solid #0466D1',
        backgroundColor: '#F5F5F5',
        color: '#0466D1',
        marginBottom: '30px',
    },
    startOverButton: {
        width: '245px',
        background: '#00D1A9',
        marginBottom: '15px'
    },
    printButton: {
        width: '245px',
        background: '#0466D1',
        marginBottom: '15px'
    }
})


