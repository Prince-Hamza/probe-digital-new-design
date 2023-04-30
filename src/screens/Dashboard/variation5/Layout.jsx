import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import HiFrame from '../../../images/dashboard/HiFrame.png'
import ResultLine from '../../../images/dashboard/ExportLine.png'
import { headings } from '../../../info/dashVariation3Headings'
import tableInfo from '../../../info/tableInfo.json'
import man from '../../../images/dashboard/man.png'
import Card from './Card';
import './mobile.css'
import Header from '../components/Header';
import { info } from './info';

function Layout(props) {

    return (
        <Col lg={12}>


            <Header />

            <br />


            <Col lg={12} xs={12} style={Styles.pageRemain} >


                <Row className={'subHeader'}>

                    <Col lg={2} xs={12} style={{ ...Content.rowLeftStart }} >
                        <Image style={{ width: '45px', height: '45px' }} src={man} />
                    </Col>

                    <Col lg={2} xs={12}  >
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '90px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > First Name </div>
                            <div style={{ width: '90px', ...themeStyles.tableText }}> James </div>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '90px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Surname </div>
                            <div style={{ width: '50px', ...themeStyles.tableText }}> Smithson </div>
                        </Row>
                    </Col>

                    <Col lg={2} xs={12} >
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '80px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > D.O.B </div>
                            <div style={{ width: '100px', ...themeStyles.tableText }}> name </div>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '80px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Age </div>
                            <div style={{ width: '100px', ...themeStyles.tableText }}> 49 </div>
                        </Row>
                    </Col>

                    <Col lg={3} xs={12} >
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '80px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > ID Card </div>
                            <div style={{ width: '170px', ...themeStyles.tableText }}> 5843 2166 4567 8901 </div>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '80px', ...themeStyles.smallText3, ...Content.rowLeftStart }} > Contact </div>
                            <div style={{ width: '170px', ...themeStyles.tableText }}> 2166 4567 8901  </div>
                        </Row>
                    </Col>


                    <Col lg={3} xs={12}  >
                        <Row style={{ width: '100%' }}>
                            <div style={{ width: '120px', ...themeStyles.smallText }} > Current Address </div>
                            <div style={{ width: '170px', ...themeStyles.tableText }}> 556 london street </div>
                        </Row>
                    </Col>


                </Row>


                <Row style={{ width: '100%', padding: '10px' }}>
                    <Card info={info.card1} />
                    <Card info={info.card2} />
                    <Card info={info.card3} />
                    <Card info={info.card4} />
                </Row>


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
    pageRemain: {
        padding: '10px',
        height: 'auto',
        ...Content.colCentrify
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
    subheader: {
        boxShadow: '0px 0px 5px 1px lightgray',
        backgroundColor: 'white',
        width: '99.9%',
        marginBottom: '25px',
        height: '80px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})