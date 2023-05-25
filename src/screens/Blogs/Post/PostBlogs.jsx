import React, { useContext, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Content } from '../../../styles/styles'
import { themeStyles } from '../../../styles/theme';
import Sidebar from '../../Dashboard/components/Sidebar';
import { AppContext } from '../../../Context';
import illus from '../../../images/dashboard/data-illustration.png'

function PostBlogs(props) {


    const { appInfo, setAppInfo } = useContext(AppContext)

    const [blog, setBlog] = useState({
        cover: undefined,
        title: undefined,
        intro: undefined,
        content: [
            {
                subtitle: '',
                text: '',
                image: ''
            }
        ]
    })


    const [selectedSubtitle, setSelectedSubtitle] = useState('')
    const [selectedPara, setSelectedPara] = useState('')

    const [para, setPara] = useState('')
    const [subtitle, setSubtitle] = useState('')


    const mainInfo = (key, value) => {
        blog[key] = value
        setBlog({ ...blog })
    }

    const insert = (key, value) => {
        let object = {}
        object[key] = value
        blog.content.push(object)
        setBlog({ ...blog })
    }

    const onChooseCover = (e) => {
        blog.cover = URL.createObjectURL(e.target.files[0])
        setBlog({ ...blog })
    }

    const onChoosePic = (e) => {
        let object = ({ image: URL.createObjectURL(e.target.files[0]) })
        blog.content.push(object)
        setBlog({ ...blog })
    }


    const insertCoverClick = () => {
        document.getElementById('chooseCover').click()
    }


    const insertPicClick = () => {
        document.getElementById('choosePic').click()
    }


    return (
        <Col lg={12}>
            <Row style={Styles.sideBarContainer}>
                <Sidebar />
                <Col lg={appInfo.sideBarExpanded ? 10 : 11} xs={12} style={Styles.column}>


                    <Col lg={8} style={Styles.container}>

                        <br />

                        <p style={{ ...themeStyles.heading3, color: 'gray' }}>  Choose a Title , Cover image, Description  for your blog. Add more sections using toolbox.    </p>

                        <Form.Control className={'title'} type='text' placeholder='title' onChange={(e) => { mainInfo('title', e.target.value) }} />
                        <br />
                        <Form.Control type='text' placeholder='Intro' onChange={(e) => { mainInfo('intro', e.target.value) }} />
                        <br />
                        <Button onClick={insertCoverClick} >
                            Insert Cover Image
                        </Button>

                        <br />
                        <br />

                        <Col lg={10} >

                            <Row style={Styles.toolBox}>

                                <Col lg={1}>
                                    <Form.Text style={Styles.insertText} > Insert </Form.Text>
                                </Col>


                                <Col lg={2}>
                                    <Row style={{ width: '100%' }} onClick={(e) => { setSelectedSubtitle(true) }} >
                                        <Form.Text style={Styles.toolboxText} > Subheading </Form.Text>
                                    </Row>
                                </Col>

                                <Col lg={2}>
                                    <Row style={{ width: '100%' }} onClick={(e) => { setSelectedPara(true) }} >
                                        <Form.Text syle={Styles.toolboxText}>  Para  </Form.Text>
                                    </Row>
                                </Col>

                                <Col lg={2}>
                                    <Row style={{ width: '100%' }} >
                                        <Form.Text syle={Styles.toolboxText} onClick={insertPicClick} >  Image  </Form.Text>
                                    </Row>
                                </Col>

                            </Row>
                        </Col>


                        <br />

                        {selectedSubtitle &&
                            <Col>
                                <Form.Control style={{ height: '100px' }} type='text' placeholder='type your subheading here' onChange={(e) => { setSubtitle(e.target.value) }}>
                                </Form.Control>
                                <br />
                                <Button onClick={() => { setSelectedSubtitle(false); insert('subtitle', subtitle) }} > Submit </Button>
                            </Col>
                        }


                        {selectedPara &&
                            <Col>
                                <Form.Control style={{ height: '100px' }} type='text' placeholder='type your paragraph here' onChange={(e) => { setPara(e.target.value) }}>
                                </Form.Control>
                                <br />
                                <Button onClick={() => { setSelectedPara(false); insert('para', para) }}> Submit </Button>
                            </Col>
                        }

                        <br />
                        <br />
                        <br />

                        <Col lg={12} >
                            <Form.Text style={themeStyles.heading4}> Preview </Form.Text>
                        </Col>
                        <br />
                        <br />

                        <Col lg={10}>

                            <p style={themeStyles.heading4} > {blog.title} </p>
                            <br />
                            {blog.cover && <Image style={{ width: '99%', height: '500px' }} src={blog.cover} />}
                            <br />
                            <br />
                            <p style={themeStyles.smallText2} > {blog.intro} </p>

                            {blog.content.map((item) => {
                                return (
                                    <Col lg={12} key={Math.random()}>
                                        {item.image && <Image style={{ width: '99%', height: '500px' }} src={item.image} />}
                                        {item.subtitle && <Form.Text style={themeStyles.heading3} > {item.subtitle} </Form.Text>}
                                        {item.para && <Form.Text style={themeStyles.smallText2} > {item.para} </Form.Text>}
                                    </Col>
                                )
                            })}
                            
                        </Col>


                        <input style={Styles.chooseCover} id={'chooseCover'} type={'file'} onChange={(e) => { onChooseCover(e) }} />
                        <input style={Styles.choosePic} id={'choosePic'} type={'file'} onChange={(e) => { onChoosePic(e) }} />


                    </Col>


                </Col>
            </Row>
        </Col>
    )

}

export default PostBlogs

const Styles = ({
    container: {
        padding: '15px',
        boxShadow: '0px 0px 8px 1px lightgray',
        marginLeft: '40px',
        marginTop: '40px'
    },
    toolBox: {
        width: '100%',
        height: '50px',
        marginLeft: '0%',
        border: 'none',
        borderRadius: '50px',
        outline: 'none',
        boxShadow: '0px 0px 8px 1px lightgray',
        ...Content.rowCentrify
    },
    insertText: {
        font: 'bold italic 14px times new roman'
    },
    toolboxText: {
        font: '12px poppins',
        cursor: 'pointer'
    },
    chooseCover: {
        display: 'none'
    },
    choosePic: {
        display: 'none'
    }
})


