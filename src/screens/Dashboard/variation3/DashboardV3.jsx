import React, { useContext, useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import Gradient from '../../../images/dashboard/LeftBarGradient.png'
import Content from './Layout';
import logo from '../../../images/logo.png'
import Background from '../../../images/dashboard/dashTheme.png'
import personToPerson from '../../../images/dashboard/p2p.png'
import searchOnPerson from '../../../images/dashboard/sop.png'
import personToCompany from '../../../images/dashboard/p2c.png'
import illus from '../../../images/dashboard/data-illustration.png'
import toggleBlue from '../../../images/dashboard/toggleBlue.png'
import arrowBlue from '../../../images/dashboard/arrowBlue.png'
import toggle from '../../../images/dashboard/toggle.png'
import arrow from '../../../images/dashboard/arrow.png'
import { AppContext } from '../../../Context';
import Layout from './Layout';

function Dashboard(props) {

    const [selected, setSelected] = useState(1)

    const { appInfo, setAppInfo } = useContext(AppContext)
    const itemWrapper = appInfo.sideBarExpanded ? { ...Styles.textWrap, width: '95%', justifyContent: 'flex-start' } : { ...Styles.textWrap, width: '70%', justifyContent: 'center' }
    const itemWrapperVoid = appInfo.sideBarExpanded ? { ...Styles.textWrapVoid, width: '95%', justifyContent: 'flex-start' } : { ...Styles.textWrapVoid, width: '70%', justifyContent: 'center' }



    const toggleSidebar = () => {
        appInfo.sideBarExpanded = appInfo.sideBarExpanded ? false : true
        setAppInfo({ ...appInfo })
    }

    return (
        <Col lg={12}>
            <Row style={Styles.container} >
                <Col lg={appInfo.sideBarExpanded ? 2 : 1} xs={12} style={{ ...Styles.sideBar }}>

                    <div style={Styles.sideBarInner} >

                        <Image src={logo} style={Styles.logo} />


                        {appInfo.sideBarExpanded ?
                            <Col style={Styles.toggle} onClick={toggleSidebar} >  <Image src={arrow} style={Styles.arrowDark} /> </Col>
                            :
                            <Col style={Styles.toggleBlue} onClick={toggleSidebar} > <Image src={arrowBlue} style={Styles.arrow} />  </Col>
                        }


                        <Row style={Styles.sideBarItem} onClick={() => { setSelected(1) }} >
                            <div style={selected === 1 ? itemWrapper : itemWrapperVoid}>
                                <Image src={searchOnPerson} style={Styles.sidebarItemIcon} />
                                {appInfo.sideBarExpanded && <div style={Styles.itemText} > Search on Person</div>}
                            </div>
                        </Row>

                        <Row style={Styles.sideBarItem} onClick={() => { setSelected(2) }} >
                            <div style={selected === 2 ? itemWrapper : itemWrapperVoid}>
                                <Image src={personToCompany} style={Styles.sidebarItemIcon} />
                                {appInfo.sideBarExpanded && <div style={Styles.itemText} > Person to Person</div>}
                            </div>
                        </Row>

                        <Row style={Styles.sideBarItem} onClick={() => { setSelected(3) }} >
                            <div style={selected === 3 ? itemWrapper : itemWrapperVoid}>
                                <Image src={personToPerson} style={Styles.sidebarItemIcon} />
                                {appInfo.sideBarExpanded && <div style={Styles.itemText}> Person to Company </div>}
                            </div>
                        </Row>

                    </div>

                </Col>


                <Col lg={appInfo.sideBarExpanded ? 10 : 11} xs={12} style={Styles.column}>
                    <Layout />
                </Col>


            </Row >
        </Col >
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
        height: window.screen.height,
        padding: '0px',
        textAlign: 'left',
        position: 'relative',
        backgroundImage: `url(${Gradient})`,
        // border: 'solid 1px'
    },
    textWrap: {
        //marginLeft: '10px',
        background: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '5px',
        marginBottom: '15px',
        width: '95%',
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
        padding: '10px',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px',
        height: '800px',
        backgroundColor: '#F5F5F5',
    },
    logo: {
        marginLeft: '8%',
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
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
        marginLeft: '10px'
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
        right: '1px',
        cursor: 'pointer',
        width: '32px',
        height: '48px',
        backgroundImage: `url(${toggle})`,
        ...Content.colCentrify
    },
    toggleBlue: {
        position: 'absolute',
        top: '1%',
        left: '88%',
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



