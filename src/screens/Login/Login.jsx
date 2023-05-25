import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import NavBar from '../Home/Navbar/Navbar'
import { Content } from '../../styles/styles'
import { themeStyles } from '../../styles/theme'
import illustration from '../../images/Login/login_img.png'
import footerImage from '../../images/Login/Footer_Illustration.png'

function Login(props) {
    return (
        <Col lg={12} >
            <NavBar />


            <Row style={{ ...Styles.container, padding: '10px', marginLeft: '0px', width: '100%', height: '600px', background: 'linear-gradient(90deg, #A581F5 0%, #6972EF 100%)' }}>

                <p style={{ ...themeStyles.title, color: 'white' }}> Sign in </p>

                <p style={{ ...themeStyles.para, color: 'white' }}> Welcome back, discover, interpret and connect </p>

            </Row>

            <Row style={{ width: '100%', padding: '10px' }}>

                <Col lg={6} xs={12} style={Styles.container} >

                    <Form.Text style={themeStyles.title}>  Welcome Back  </Form.Text>
                    <br />
                    <br />

                    <Form.Text style={themeStyles.para} > Get quick access to all WordPress premium themes with extensions or/and SP Page Builder Pro with support! </Form.Text>

                    <br />
                    <br />

                    <Form.Text style={themeStyles.heading2}> User name  </Form.Text>
                    <Form.Control style={Styles.input} placeholder={'uername'} />

                    <br />
                    <br />

                    <Form.Text style={themeStyles.heading2}> Password  </Form.Text>
                    <Form.Control style={Styles.input} placeholder={'*****'} />

                    <br />
                    <br />

                    <Row style={Content.rowSpaceBetween}>
                        <Form.Control type={'checkbox'} style={{ width: '20px', height: '20px' }} />
                        <p> Remember Me  </p>


                        <p lg={6} > Forgot Password ? </p>
                    </Row>

                    <Button style={Styles.button} >
                        Login
                    </Button>

                </Col>

                <Col lg={6} xs={12} style={Styles.rightCard} >

                </Col>
            </Row>


            <Row style={{ padding: '10px' }} >
                <Col lg={4} xs={12}>

                    <p style={{ ...themeStyles.heading1, color: '#222' }} > Probe Digital </p>
                    <p> © 2022 Probe Digital. All rights reserved.​   </p>
                </Col>



                <Col lg={4} xs={12}>
                    <p style={{ ...themeStyles.heading1, color: '#222' }} > Site Map </p>

                    <p>  About us </p>

                    <p>  Services  </p>

                    <p>  Pricing </p>

                    <p>   Login </p>

                    <p>  Contact us </p>

                </Col>

                <Col lg={4} xs={12}>
                    <p style={{ ...themeStyles.heading1, color: '#222' }} > Contact </p>

                    <p>    112 Buckingham Palace Road </p>

                    <p> Westminster  </p>

                    <p> London </p>

                    <p> SW1W 0SR </p>

                    <p> Phone: (+44) 020 847 968   </p>

                    <p> Fax: (+44) 020 847 968   </p>

                    <p>  Email: contact@probedigitial.co.uk    </p>


                </Col>
            </Row>

            <div style={Styles.footerImage} >

            </div>

        </Col>
    )
}

export default Login



const Styles = ({

    container: {
        ...Content.colCentrify,
        padding: '50px'
    },
    leftCard: {
        backgroundColor: '#677294',
        backgroundSize: 'cover',
        backgroundRepeat: 'no repeat',
        ...Content.colCentrify
    },
    rightCard: {
        backgroundColor: 'white',
        backgroundImage: `url(${illustration})`,
        backgroundSize: 'cover',
        height: '600px'
    },
    button: {
        backgroundColor: 'blue',
        width: '90%'
    },
    footerImage: {
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no repeat',
        width: '100%',
        height: '258px'

    }
})

