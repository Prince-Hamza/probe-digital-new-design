import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { themeStyles } from '../../../styles/theme';
import logo from '../../../images/logo.png'
import Fb from '../../../images/social/Fb.png'
import Tweet from '../../../images/social/twitter.png'
import Youtube from '../../../images/social/youtube.png'
import { Content } from '../../../styles/styles';
import location from '../../../images/footer/location.png'
import headphone from '../../../images/footer/Headphone.png'
import letter from '../../../images/footer/Letter.png'


const icons = [Fb, Youtube, Tweet]

function Footer() {
    return (
        <Row style={{ ...themeStyles.container, padding: '10px' }}>
            <Col lg={4}>
                <Image src={logo} />
                <p style={themeStyles.para}>
                    Probe Digital is designed to ease the burden of trying to understand the links between people, companies and other entities.
                </p>

                <Row style={Styles.iconsRow} >
                    {icons.map((icon) => {
                        return (
                            <Image src={icon} style={Styles.icon} />
                        )
                    })}
                </Row>
                <br />
            </Col>


            <Col lg={4} style={Styles.section} >
                <p style={themeStyles.subTitle}>
                    Services
                </p>
                <div style={{ textAlign: 'left' }} >
                    <p style={themeStyles.para}>  Search on Person  </p>
                    <p style={themeStyles.para}>   Search Person to Company Connection   </p>
                    <p style={themeStyles.para}>  Search Person to Company Connection   </p>
                </div>
            </Col>


            <Col lg={4} style={Styles.section}>
                <Row style={Styles.row} >
                    <p style={{ ...themeStyles.subTitle, ...Styles.row }}>
                        Contact
                    </p>
                </Row>

                <Row style={Styles.row} >
                    <Col lg={2} xs={2}>
                        <Image src={headphone} />
                    </Col>
                    <Col lg={10} xs={10} style={{ ...Content.colCenterLeft, ...Styles.textWrap }} >
                        <p style={{ ...themeStyles.para, ...Styles.row, textAlign: 'left' }} > 112 Buckingham Palace Road Westminster London SW1W 0SR </p>
                    </Col>
                </Row>

                <Row style={Styles.row}>
                    <Col lg={2} xs={2} >
                        <Image src={letter} />
                    </Col>
                    <Col lg={10} xs={10} style={Styles.textWrap} >
                        <p> (+44) 020 847 968 </p>
                    </Col>
                </Row>

                <Row style={Styles.row}>
                    <Col lg={2} xs={2} >
                        <Image src={location} />
                    </Col>
                    <Col lg={10} xs={10} style={Styles.textWrap}>
                        <p> contact@probedigital.co.uk </p>
                    </Col>
                </Row>

            </Col>


        </Row>
    )
}

export default Footer

const Styles = ({
    iconsRow: {
        width: '100%',
        ...Content.rowCentrify
    },
    icon: {
        width: '57px',
        height: '35px'
    },
    section: {
        ...Content.colCenterLeft
    },
    row: {
        width: '100%',
        ...Content.rowLeftStart
    },
    textWrap: {
        textAlign: 'left'
    }
})