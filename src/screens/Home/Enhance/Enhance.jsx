import React from 'react';
import { Image, Row } from 'react-bootstrap';
import blueBanner from '../../../images/Enhance.png'

function Enhance() {
    return (
        <Row style={{ padding: '0px', marginBottom: '35px' }} >
            <Image src={blueBanner} />
        </Row>
    )
}

export default Enhance;