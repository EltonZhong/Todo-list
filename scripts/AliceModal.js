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
    getTuling(ev){
        let str = ev.target.value;
        let self = this;
        let requesturl = "http://www.tuling123.com/openapi/api?key=78210713ac014578b0cbf47d28126675&info="+str;  
        $.ajax({
            url:requesturl,
            success:(resp)=>{
                console.log(resp.text)
                self.setState({tuling:resp.text})
            },
        })
    }
    render(){
        if(this.state.tab){
            return (
                <Modal show = {this.props.show} onHide = {this.props.hide}>
                    <Modal.Header>
                        <Modal.Title>
                            你好我是图灵机器人，<a onClick = {()=>{
                                this.setState({tab:!this.state.tab})
                            }}>点此ffff</a> 切换到Alice
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input onChange = {this.getTuling.bind(this)}></input>
                        <p>{this.state.tuling}</p>
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
