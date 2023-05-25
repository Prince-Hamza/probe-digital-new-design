import React, { useContext, useState } from 'react'
import { Col } from 'react-bootstrap'
import { AppContext } from '../../../Context'
import { Content } from '../../../styles/styles'
import Gradient from '../../../images/dashboard/LeftBarGradient.png'
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import toggle from '../../../images/dashboard/toggle.png'

function Sidebar2(props) {

    const { appInfo, setAppInfo } = useContext(AppContext)

    return (
        <Col lg={appInfo.sideBarExpanded ? 2 : 1} xs={3} md={3} style={Styles.sideBar} >

        </Col>
    )
}

export default Sidebar2

const Styles = ({
    container: {
        ...Content.rowLeftStart,
    },
    sideBar: {
        ...Content.colTopCenter,
        backgroundImage: `url(${Gradient})`,
        backgroundSize: 'cover',
        height: '120vh',
        border: 'solid 1px'
    },
    textWrap: {
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
        height: 'auto',
        backgroundColor: '#F5F5F5',
        // backgroundImage: `url(${Background})`,
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
    }
})






