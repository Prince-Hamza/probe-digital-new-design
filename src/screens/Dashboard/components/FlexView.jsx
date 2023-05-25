import React from 'react'

function FlexView({ children }) {
    return (
        <div style={Styles.flex} >
            {children}
        </div>
    )
}

export default FlexView


const Styles = {
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '0px',
        height: 'auto',
        width: '102%',
        padding: '0px',
    }
}