import React from 'react';
import { Col, Image, Row } from 'react-bootstrap'
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';
import menu from '../../../images/cardMenu.png'
import './mobile.css'

function Card({ info }) {
    return (
        <div className={'cardBackground'} >

            {info.gradient &&
                <Row lg={12} xs={12} md={12} style={Styles.cardHead}>
                    <div style={{ width: '130px' }}> Company Info  </div>
                    <div style={{ width: '75px' }}>
                        <Image src={menu} style={Styles.cardMenu} />
                    </div>
                </Row>
            }


            {info.mainTitle &&
                <Col lg={12} xs={12} style={Styles.titleWrap}>
                    <div style={Styles.cardBigTitle} > {info.mainTitle} </div>
                </Col>
            }

            {info.headings &&
                <Row className='cardHeadRow' >
                    {info.headings.map((item) => {
                        return (
                            <Col lg={item.lg} xs={item.xs}>
                                <Row style={{ width: '100%' }}>
                                    <Image src={item.image} style={{ width: 'auto', height: '20px', padding: '0px', marginRight: '2px' }} />
                                    <div style={Styles.cardHeading} > {item.title} </div>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            }


            {info.rows.length > 0 && info.rows.map((row) => {
                return (
                    <Row className={'cardRow'} >
                        {row.items.map((item, index) => {
                            if (!item.image) {
                                return (
                                    <Col style={{ padding: '0px' }} lg={item.lg} xs={item.xs} md={item.xs} className={index === 0 ? 'hubbleWrap' : 'x'}>
                                        {!item.image && <div className={index === 0 ? 'hubbleText' : 'x'} > {item.text} </div>}
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col lg={item.lg} xs={12} md={12} style={Styles.cardRowCellCol}>
                                        <Row style={Styles.cardRowCellColRow} >
                                            <Image src={item.image} style={{ width: '40px', height: '15px' }} />
                                            {item.text && <div style={{ ...themeStyles.smallText, width: '120px' }} > {item.text} </div>}
                                        </Row>
                                    </Col>
                                )
                            }
                        })}
                    </Row>

                )
            })}
        </div>
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
        height: '500px',
        width: '47%',
        background: 'linear-gradient(90deg, rgba(0,188,175,1) 0%, rgba(1,152,188,1) 100%)',
        marginRight: '25px',
        marginBottom: '25px',
        ...Content.colTopCenter
    },
    cardHead: {
        width: '100%',
        height: '50px',
        padding: '0px',
        boxShadow: '0px 0px 5px 1px lightgray',
        ...Content.rowSpaceBetween
    },

    grayRowIcon: {
        width: '40px',
        height: '20px',
        // border: 'solid 1px',
        textAlign: 'left'
    },
    grayRowText: {
        ...themeStyles.smallText3,
        color: '#222',
        width: '50%',
        // border: 'solid 1px',
        textAlign: 'left'
    },
    cardRow: {
        width: '100%',
        height: '50px',
        // border: 'solid 1px lightgray',
        boxShadow: '0px 0px 5px 1px lightgray',
        backgroundColor: 'white',
        ...Content.rowCentrify
    },
    cardMenu: {
        width: '25px',
        height: '25px',
        cursor: 'pointer',
        ...themeStyles.heading5
    },
    cardRowCellCol: {
        padding: '0px'
    },
    cardRowCellColRow: {
        ...Content.rowLeftStart,
        // border: 'solid 1px'
    },
    grayRowColumn: {
        padding: '0px',
        ...Content.colCenterLeft
    },
    grayRowColumnRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // border: 'solid 1px'
    },
    titleWrap: {
        width: '100%',
        height: '50px',
        boxShadow: '0px 0px 5px 1px lightgray',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardBigTitle: {
        ...themeStyles.heading5,
        backgroundColor: 'white',
        marginLeft: '10px'
    },

    cardHeading: {
        ...themeStyles.heading5,
        fontSize: '8px',
        textAlign: 'left',
        color: '#656565',
        width: 'auto',
        padding: '0px'
    },
})