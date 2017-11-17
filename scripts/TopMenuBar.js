import React from 'react'
import {Col, Row, Button, ButtonGroup} from 'react-bootstrap'
export default class TopMenuBar extends React.Component{
	render(){
		return (
			<Row>
				<div style = {{backgroundColor:'green'}}>
				<Col md = {6}>
					<ButtonGroup>
						<Button bsStyle = "danger">
							Memories
						</Button>
						<Button>
							Photos
						</Button>
						<Button>
							Articles
						</Button>
					</ButtonGroup>
				</Col>
				<Col md = {6}>
					<div style = {{backgroundColor:'black'}}>
						here Im
					</div>
				</Col>
				</div>
			</Row>
		)
	}
}