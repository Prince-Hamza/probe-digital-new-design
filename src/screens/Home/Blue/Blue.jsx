import React from 'react';
import { Image, Row } from 'react-bootstrap';
import blueBanner from '../../../images/blueBanner.png'

function Blue(props) {
    return (
        <Row style={{ padding: '15px', marginBottom: '35px' }} >
            <Image src={blueBanner} />
        </Row>
    );
}

export default Blue;