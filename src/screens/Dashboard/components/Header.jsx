import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles';
import { themeStyles } from '../../../styles/theme';

function Header(props) {
    return (

        <Row lg={12} xs={12} style={Styles.header} >
            <Col lg={6} xs={6} style={Styles.firstHalf}>
                <div style={{ ...themeStyles.heading1, color: '#222', marginLeft: '15px' }}> Dashboard </div>
            </Col>
            <Col lg={6} xs={6} style={Styles.secondHalf}>
                <Row style={{ ...Styles.secondHalfRow, width: '100%' }} >
                    <div style={Styles.sphere} >
                        A
                    </div>
                    <div style={Styles.text} > Hi, Adam Dean </div>
                </Row>
            </Col>
        </Row>
    );
}

export default Header


const Styles = ({
    header: {
        height: 'auto',
        backgroundColor: 'white',
        padding: '5px',
        ...Content.rowSpaceBetween,
    },
    firstHalf: {
        ...Content.colCenterLeft
    },
    secondHalf: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    secondHalfRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        width: '150px',
        ...themeStyles.footerText,
    },
    sphere: {
        width: '35px',
        height: '35px',
        borderRadius: '50px',
        backgroundColor: 'blue',
        color: 'white',
        ...Content.colCentrify
    }

})
