import React from 'react'
import { Col } from "react-bootstrap"
import NavBar from '../Navbar/Navbar'
import AppFace from '../AppFace/AppFace'
import Help from '../Help/Help'
import Who from '../Who/Who'
import What from '../What/What'
import Blue from '../Blue/Blue'
import Services from '../Services/Services'
import Approach from '../Approach/Approach'
import Goal from '../Goal/Goal'
import Enhance from '../Enhance/Enhance'
import Copyright from '../CopyRight/CopyRight'
import Footer from '../Footer/Footer'

export default function Main() {

    return (
        <Col lg={12} md={12} xs={12} style={{ padding: '0px' }} >
            <NavBar />
            <AppFace />
            <Help />
            <Who />
            <What />
            <Blue />
            <Services />
            <Approach />
            <Goal />
            <Enhance />
            <Footer />
            <Copyright />
        </Col>
    )
}

