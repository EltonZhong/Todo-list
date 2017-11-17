import {Modal} from 'react-bootstrap'
import React from 'react'
import $ from 'jquery'
export default class AliceModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tab:false,
            tuling:"121211212" 
        }
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }
    render(){
        if(this.state.tab){
            return (
                <Modal show = {this.props.show} onHide = {this.props.hide}>
                    <Modal.Header>
                        <Modal.Title>
                            发布招聘信息
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">

                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                            <Col componentClass={ControlLabel} sm={2}>
                                <ControlLabel>兼职名称</ControlLabel>
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <FormControl.Feedback />
                            <HelpBlock>请重新输入</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            )
        }
        return (
            <Modal show = {this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Hi I'm Alice,click <a onClick = {()=>{
                            this.setState({tab:!this.state.tab})
                        }}>here</a> to Talk to fuck
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe style = {{
                        width:550,
                        height:1000,
                        display:this.state.tab
                    }} src ='http://sheepridge.pandorabots.com/pandora/talk?botid=b69b8d517e345aba&skin=custom_input'>
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }
}
