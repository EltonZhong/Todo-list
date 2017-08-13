import React from 'react'
import ReactDOM from 'react-dom'
import ReactSidebar from 'react-sidebar'
import Particles from 'react-particles-js'
import ReactGiphy from 'react-giphy'
import Select from 'react-select'
import * as RB from 'react-bootstrap'
import {Nav,NavItem,Button,ButtonGroup,Col,FormGroup,FormControl,ListGroup,ListGroupItem} from 'react-bootstrap'
import AliceModal from './AliceModal'
// import articles1 from './main1'
import TopMenuBar from './TopMenuBar'
import Blog from './blog'
import $ from 'jquery'
import 'react-select/dist/react-select.css';
import styles from './styles.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TaskTable from './ToDoList/index'
class Try extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			showAddJob:false,
			place:'',
			value:'',
			time:'',
			salary:'',
			fuck:'none'
		}
	}
	componentWillReceiveProps(){

	}
	componentWillMount(){
		this.changeSelect()
	}

	hide(){
		this.setState({
			showAlcie:!this.state.showAlcie
		})
	}
	changePlace(va){
		this.setState({place:va.value})
		this.changeSelect(va.value,this.state.salary,this.state.time,this.state.searchValue)
	}
	changeTime(va){
		this.setState({time:va.value})
		this.changeSelect(this.state.place,this.state.salary,va.value,this.state.searchValue)
	}
	changeSalary(va){
		this.setState({salary:va.value})
		this.changeSelect(this.state.place,va.value,this.state.time,this.state.searchValue)
	}
	changeSelect(place,salary,time,value){
		console.log({place,salary,time,value})
		$.ajax({
			url:'/selectInfo',
			data:{
				place,salary,time,value
			},
			type:'post'
		})
	}
	onSearch(ev){
		console.log(ev)
		let va = ev.target.value;
		console.log(va)
		this.setState({searchValue:va})
	}
	renderList(jobData){
		let m = 0;
		let list = jobData.map((job)=>{
			return (
				<ListGroupItem key = {m++}>
					<div style = {{display:this.state.fuck}}>
					<img style={{position:'fixed',zIndex:'10',width:'50px',height:'50px'}} src = "https://www.w3schools.com/howto/img_avatar2.png"/>
					</div>
					<a style = {{display:'inline-flex',width:'100%'}} onMouseEnter={()=>{
						this.setState({fuck:'block'})
					}} onMouseLeave={()=>{
						this.setState({fuck:'none'})
					}}>
					<Col md = {7}>
						<div style = {{width:'100%'}}>{job.subject}</div>
					</Col>
					<Col md = {4}>
						<div style = {{width:'100%'}}>{job.companyName}</div>
					</Col>
					<Col md = {1}>						
						<div style = {{width:'100%'}}>{job.salary}</div>
					</Col>
					</a>
				</ListGroupItem>
			)
		})

		return (
			<div>
				<div style = {{height:100}}>
					<Col md = {4}>
						<label>地点筛选</label>
						<Select
							options = {[{value:'wuhan',label:'武汉'}]}
							id = '12'
							value = {this.state.place}
							onChange = {this.changePlace.bind(this)}
						/>
					</Col>
					<Col md = {4}>
						<label>时间筛选</label>
						<Select
							options = {[{value:'0-7',label:'一周内'}]}
							id = '12'
							value = {this.state.time}
							onChange = {this.changeTime.bind(this)}
						/>
					</Col>
					<Col md = {4}>
						<label>薪酬待遇</label>					
						<Select
							options = {[{value:'0-40',label:'0~40每天'}]}
							id = '12'
							value = {this.state.salary}
							onChange = {
								this.changeSalary.bind(this)
							}
						/>
					</Col>
				</div>
				<div>
				<ListGroup>
					{list}
				</ListGroup>
				</div>
			</div>
		)
	}
	render(){
		let data = [{subject:'code manager',salary:'100/day',companyName:'Google'}]
		return (
			<div>
				<div>
					<AliceModal show = {this.state.showAddJob}/>
				</div>
				<div style = {{height:'100px'}}>
					<Col md = {2}>
					</Col>
					<Col md = {8}>
						<ButtonGroup>
						</ButtonGroup>
					</Col>
					<Col md = {2}>
					<ButtonGroup>
						<Button >登记简历</Button>
						<Button >发布招聘</Button>
					</ButtonGroup>
					</Col>
				</div>
				<div style={{height:100}}>
					<Col md = {2}></Col>
					<Col md = {8}>
						<div style = {{display:'inline-flex',width:'60%'}}>
							<FormControl
							id = {'search_value'}
							type="text"
							value={this.state.searchValue}
							placeholder="Search ..."
							onChange={this.onSearch.bind(this)}
							>
							</FormControl>
							<Button onClick = {()=>{
								this.changeSelect(this.state.place,this.state.salary,this.state.time,this.state.searchValue)
							}}>
								Search
							</Button>
						</div>
					</Col>
					<Col md = {2}></Col>
				</div>
				<div style = {{width:'80%',margin: 'auto'}}>
					{this.renderList(data)}
				</div>
			</div>
		)
	}
	// }
	// _render(){

	// 	return (
	// 	<div>
	// 		<div style = {{zIndex:100,top:0,position:'absolute',width:'100%'}}>
	// 			<TopMenuBar/>
	// 		</div>
	// 		<div style = {{zIndex:100,top:'50%',left:'50%',position:'absolute'}}>
	// 		<div>
	// 			<AliceModal show = {this.state.showAlcie} hide = {this.hide.bind(this)}/>
	// 		</div>
	// <RB.Button bsStyle='danger' onClick={()=>{
	// 				this.setState({showAlcie:true})
	// 			}}>Elton Orzz</RB.Button>
	// 			<div>
	// 				 <Nav bsStyle="pills" activeKey={1} onSelect={(e)=>{
	// 				 	console.log(e)
	// 				 	switch(e){
	// 				 		case 1:
	// 				 			window.location.href = 'http://www.baidu.com'
	// 				 			break;
	// 				 		case 2:
	// 				 			window.location.href = 'http://www.google.com.hk'
	// 				 			break;
	// 				 		default:
	// 							return;
	// 				 	}
	// 				 }}>
	// 				    <NavItem eventKey={1} href="./cheng.html">'s Personal Blog</NavItem>
	// 				    <NavItem eventKey={2} title="Item">You Are Pretty</NavItem>
	// 				    <NavItem eventKey={3} disabled>The Way You Are</NavItem>
	// 				  </Nav>
	// 			</div>
	// 		</div>
	// 	</div>
	// 			)
	// }
}
	         		// <button onClick={this.goleft}>rightB</button>
	         	    // <button style={defaultstyles.rightbuttonstyle}onClick = { this.goright}>LeftB</button>

ReactDOM.render( < TaskTable / >, document.getElementById('root'))
