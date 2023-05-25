import React, { useContext, useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import Gradient from '../../../images/dashboard/LeftBarGradient.png'
import { Content } from '../../../styles/styles';
import logo from '../../../images/logo.png'
import Background from '../../../images/dashboard/dashTheme.png'

import personToPerson from '../../../images/dashboard/p2c_white.png'
import searchOnPerson from '../../../images/dashboard/sop_white.png'
import personToCompany from '../../../images/dashboard/pop_white.png'

import illus from '../../../images/dashboard/data-illustration.png'
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import arrowBlue from '../../../images/dashboard/arrowBlue.png'
import toggle from '../../../images/dashboard/toggle.png'
import arrow from '../../../images/dashboard/arrow.png'
import { AppContext } from '../../../Context'
import menu from '../../../images/menu.png'
import '../mobile.css'
import { onMobile } from '../mobile';
import Sidebar from '../components/Sidebar';


function Dashboard() {

    const { appInfo } = useContext(AppContext)

    return (
        <Col lg={12}>
            <Row style={Styles.container} >
                <Sidebar />
                <Col lg={appInfo.sideBarExpanded ? 10 : 11} xs={12} style={Styles.column}>
                    <Image src={illus} style={{ width: '300px', height: '300px' }} />
                </Col>
            </Row>
        </Col>
    )
}

export default Dashboard


const Styles = ({
    container: {
        ...Content.rowLeftStart,
        // border: 'solid 1px'
    },

    sideBar: {
        ...Content.colTopCenter,
        backgroundImage: `url(${Gradient})`
    },
    textWrap: {
        //marginLeft: '10px',
        background: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '5px',
        marginBottom: '15px',
        width: '99%',
        height: '40px',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        //border: 'solid 3px yellow'
    },

    sideBarItem: {
        width: '100%',
        zIndex: 1,
        marginLeft: '10px',
        ...Content.rowCentrify,
        // border: 'solid 1px'
    },

    sideBarInner: {
        padding: '5px',
    },

    sideBarGradient: {
        width: '100%',
        height: 'auto',
        zIndex: -1
    },
    column: {
        // border: 'solid 2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        height: '800px',
        backgroundColor: '#F5F5F5',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    },
    logo: {
        marginLeft: '0%',
        marginTop: '5px',
        width: '75%',
        marginBottom: '30px'
    },
    sidebarItemIcon: {
        width: '24px',
        height: '24px',
        color: 'white',
        cursor: 'pointer'
        //border: 'solid 1px',
    },
    itemText: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: 'white',
        cursor: 'pointer',
        marginLeft: '5px'
    },
    textWrapVoid: {
        marginBottom: '15px',
        width: '98%',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    background: {
        // border: 'solid 1px',
        width: '100%',
        height: window.screen.height,
    },
    filters: {
        width: '90%',
        height: '84px',
        marginTop: '25px',
        marginBottom: '100px',
    },
    toggle: {
        position: 'absolute',
        top: '1%',
        right: '0px',
        cursor: 'pointer',
        width: '32px',
        height: '48px',
        backgroundImage: `url(${toggle})`,
        ...Content.colCentrify
    },
    toggleBlue: {
        position: 'absolute',
        top: '1%',
        left: '85%',
        cursor: 'pointer',
        width: '50px',
        height: '70px',
        backgroundImage: `url(${toggleBlue})`,
        ...Content.colCentrify
    },
    arrow: {
        position: 'absolute',
        top: '45%',
        left: '50%'
    },

    arrowDark: {
        position: 'absolute',
        top: '37%',
        left: '45%'
    },
})



