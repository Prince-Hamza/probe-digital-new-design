import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import logo from '../../../images/logo.png'
import './mobile.css'

export default function NavBar() {
    const navigate = useNavigate()

    const [navbarHeight, setNavbarHeight] = useState('128px')

    return (
        <Navbar className='primaryNavbar' style={{ height: navbarHeight }} collapseOnSelect expand="lg" lg={12} xs={12} >
            <Container style={{ pading: '0px' }} >

                <Row className={'toggleAndLogoWrap'}>
                    <Navbar.Toggle style={{ width: '45px' }} className={'toggleButton'} onClick={() => { setNavbarHeight(navbarHeight === '128px' ? '100vh' : '128px') }} variant='light' aria-controls="responsive-navbar-nav" />
                    <Image style={Styles.Logo} src={logo} />
                </Row>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mt-3" >   </Nav>
                    <Nav style={Styles.mobileMenu}>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/aboutus') }} > About us </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/getsupport') }} > Services </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/professionals') }}> Pricing </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/login') }}> Login </Nav.Link>
                        <Nav.Link style={Styles.Text} onClick={() => { navigate('/') }}> Contact us </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}


const Styles = ({
    Text: {
        color: 'white'
    },
    Logo: {
        width: '85%',
        color: 'white',
        // border: 'solid 1px',
    },
    mobileMenu: {
        padding: '10px'
    },
})