import { Content } from "./styles";

const palleteV1 = ({
    green: '#00D1A9',
    lightBlue: '#0466D1',
    darkBlue: '#021B41',
    dark: '#212529'
})

export const themeStyles = ({
    container: {
        width: '100%',
        height: 'auto',
        marginBottom: '5px',
        marginLeft: '0px',
        backgroundColor: 'rgba(4, 102, 209, 0.05)',
        ...Content.rowLeftStart
    },
    container2: {
        width: '100%',
        height: 'auto',
        marginBottom: '5px',
        marginLeft: '0px',
        backgroundColor: 'white',
        ...Content.rowCentrify,
    },
    centerWrap: {
        marginLeft: '0px',
        textAlign: 'center',
        width: '100%',
        ...Content.rowCentrify
    },
    leftWrap: {
        marginLeft: '0px',
        textAlign: 'center',
        width: '100%',
        ...Content.rowLeftStart
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '64px',
        lineHeight: '80px'
    },
    sectionTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '40px',
        lineHeight: '60px',
        color: '#021B41',
    },
    heading1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '80px',
        color: 'white',
        cursor: 'pointer'
    },
    heading2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'white',
        cursor: 'pointer'
    },
    heading3: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#021B41'
    },
    heading4: {
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center'
    },
    heading5: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left'
    },
    smallText: {
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0px',
        textAlign: 'left'
    },
    smallText2: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0px',
        textAlign: 'left'
    },
    smallText3: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '18px',
    },
    footerText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#212529'
    },
    description: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '36px',
        color: '#212529'
    },

    underline: {
        height: '10px',
        marginBottom: '25px',
        ...Content.rowLeftStart
    },

    listWrap: {
        marginBottom: '5px',
        marginLeft: '0px',
        width: '100%',
        height: 'auto',
        ...Content.rowCentrify,

    },
    listItem: {
        height: 'auto',
        marginBottom: '30px',
    },
    listItemIcon: {
        width: '100px',
        height: '100px'
    },
    listItemText: {
        font: '24px poppins',
        fontWeight: '520px',
        color: palleteV1.darkBlue
    },
    paragraph: {
        font: '20px poppins',
        color: '#212529',
        textAlign: 'left'
    },
    para: {
        font: '16px poppins',
        fontWeight: 400,
        color: '#212529',
    },
    listItemPara: {
        font: '16px poppins',
        color: '#212529',
        textAlign: 'center'
    },
    tableText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#212529'
    },
    colors: palleteV1,
})