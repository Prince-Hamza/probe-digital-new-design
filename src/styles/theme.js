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
        ...Content.rowLeftStart
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '64px',
        lineHeight: '80px'
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
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'white',
        cursor: 'pointer'
    },

    underline: {
        height: '10px',
        marginBottom: '25px',
        ...Content.rowLeftStart 
    },
    listWrap: {
        marginBottom: '5px',
        marginLeft: '0px',
        ...Content.rowCentrify,
        width: '100%'
    },
    listItem: {
        height: '250px',
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
    colors: palleteV1,


    main: {

    },





})