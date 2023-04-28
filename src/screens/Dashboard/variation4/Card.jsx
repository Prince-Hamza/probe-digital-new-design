import React from 'react';
import { Col, Image, Row } from 'react-bootstrap'
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import uk from '../../../images/dashboard/uk.png'


function Card(props) {
    return (
        <Col lg={5} xs={12} style={Styles.cardBackground}>

            <Row lg={12} xs={12} style={Styles.cardHead}>
                <div style={{ width: '130px' }} > Company Info  </div>
                <div style={{ width: '75px' }} > menu </div>
            </Row>

            {/* skip row */}


            {[1, 2, 3, 4].map(() => {
                return (
                    <Row  className={'cardRow'} >

                        <Col lg={4} xs={12}>
                            <div style={{ width: '100%', ...themeStyles.smallText2 }} > Hubble Ltd </div>
                        </Col>


                        <Col lg={4} xs={12} style={Styles.cardRowCellCol}>
                            <Row style={Styles.cardRowCellColRow} >
                                <Image src={uk} style={{ width: '40px', height: '15px' }} />
                                <div style={{ ...themeStyles.smallText, width: '120px' }} > United Kingdom </div>
                            </Row>
                        </Col>


                        <Col lg={2} xs={12} style={Styles.cardRowCellCol}>
                            <Row style={Styles.cardRowCellColRow} >
                                <Image src={uk} style={{ width: '40px', height: '16px' }} />
                                <div style={{ ...themeStyles.smallText, width: '20px' }} > Yes </div>
                            </Row>
                        </Col>



                        <Col lg={2} xs={12} style={Styles.cardRowCellCol}>
                            <Row style={Styles.cardRowCellColRow} >
                                <Image src={uk} style={{ width: '40px', height: '16px' }} />
                                <div style={{ ...themeStyles.smallText, width: '20px' }} > Yes </div>
                            </Row>
                        </Col>

                    </Row>

                )
            })}
        </Col>
    )
}

export default Card;




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
        background: 'linear-gradient(90deg, rgba(0,188,175,1) 0%, rgba(1,152,188,1) 100%)',
        marginRight:'25px',
        marginBottom:'25px',
        ...Content.colTopCenter
    },
    cardHead: {
        width: '100%',
        height: '50px',
        padding: '0px',
        boxShadow:'0px 0px 5px 1px lightgray',
        ...Content.rowSpaceBetween
    },
    cardRow: {
        width: '100%',
        height: '50px',
       // border: 'solid 1px lightgray',
        boxShadow:'0px 0px 5px 1px lightgray',
        backgroundColor: 'white',
        ...Content.rowCentrify
    },
    cardRowCellCol: {
        padding: '0px'
    },
    cardRowCellColRow: {
        ...Content.rowLeftStart,
        // border: 'solid 1px'
    }
})