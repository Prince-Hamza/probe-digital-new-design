import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { themeStyles } from '../../../styles/theme'
import underline from '../../../images/customUnderline.png'
import { Content } from '../../../styles/styles'
import Isomorphic from '../../../images/who/whoLogo.png'

function Who(props) {
    return (
        <Row style={{ ...Styles.container, marginBottom: '50px', padding: '15px', marginLeft: '0px' }}>

            <Col lg={7}>
                <span style={{ marginBottom: '50px' }} />

                <Row style={{ ...themeStyles.title, ...Styles.container }}>
                    Who are We
                </Row>

                <Col lg={12} xs={12}>
                    <Image className='underline' src={underline} />
                </Col>


                <Row style={{ ...themeStyles.subTitle, ...Styles.container }}>
                    <p style={{ textAlign: 'left' }}> The end-to-end background intelligence program </p>
                </Row>

                <Row>
                    <div style={Styles.textWrap}>
                        <p style={{ textAlign: 'left', fontFamily: 'poppins', fontWeight: 400 }} >
                            Probe Digital was established in 2019 to offer individuals and companies the ability to explore and uncover connections between entities prior to establishing business relationships. Anybody who has conducted research for a background check or investigation will have encountered challenges in knowing how various entities are connected or are related to dubious persons.
                        </p>
                    </div>
                </Row>
            </Col>

            <Col lg={5} >
                <Image style={{ width: '100%', height: '425px' }} src={Isomorphic} />
            </Col>


        </Row>
    );
}

export default Who

const Styles = ({
    container: {
        width: '100%',
        marginBottom: '5px',
        ...Content.rowLeftStart
    },
    textWrap: {
        width: '100%'
    }
})