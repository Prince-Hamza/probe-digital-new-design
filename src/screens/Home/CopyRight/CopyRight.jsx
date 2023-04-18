import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { Content } from '../../../styles/styles'
import { themeStyles } from '../../../styles/theme'

function Copyright() {
    return (
        <Row style={Styles.container} >
            <Form.Text style={Styles.font} > © Copyright 2023. All Rights Reserved </Form.Text>
        </Row>
    )
}

export default Copyright

const Styles = ({
    container: {
        width: '100%',
        height: '48px',
        padding: '0px',
        backgroundColor: themeStyles.colors.lightBlue,
        marginBottom: '0px',
        marginLeft: '0px',
        ...Content.colCentrify
    },
    font: {
        font: '12px poppins',
        fontWeight: '520',
        color: 'white'
    }
})