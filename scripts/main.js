import React from 'react'
import ReactDOM from 'react-dom'
import ReactSidebar from 'react-sidebar'
import TopMenu from './main1'
import Search from 'react-search'
import Particles from 'react-particles-js'
import ReactGiphy from 'react-giphy'
import * as RB from 'react-bootstrap'
import {Nav,NavItem} from 'react-bootstrap'
import AliceModal from './AliceModal'
// import articles1 from './main1'
var Cat = React.createClass({
	getInitialState: function() {
		return{
			page:1,
			maxpage :2
		};
	},
	render: function(){
		console.log(this.state.page)
		if (this.props.page == 1) {
		return (
			<div>
			</div>
			);
		}
		else return(<div>..?????</div>)
	}
});
var Articles1 = React.createClass({
	getInitialState: function() {
		return{
			page: 1,
			maxpage :2
		};
	},

	nextPage: function() {
		if (this.state.page>=this.state.maxpage) {return;}
		this.setState({page: this.state.page+1})
	},

	prevPage: function() {
		if (this.state.page<=1) {return}
		this.setState({page: this.state.page-1})
	},
	render: function() {
		// return (
		// <div>
		// 	<Cat page = {this.state.page} maxpage = {this.state.maxpage} />
		// 	<button onClick={this.nextPage}>nextPage</button>
		// 	<button onClick={this.prevPage}>prevPage</button>
		// </div>);
		return (<div></div>);
	}
});

const defaultstyles={
rightbuttonstyle: {
    position: 'inherit',
    right: 0
  },
};
class Try extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			showAlcie:false
		}
	}
	hide(){
		this.setState({
			showAlcie:!this.state.showAlcie
		})
	}
	render(){

		return (<div style = {{zIndex:100,top:'50%',left:'50%',position:'absolute'}}>
					<AliceModal show = {this.state.showAlcie} hide = {this.hide.bind(this)}/>
					<RB.Button bsStyle='danger' onClick={()=>{
						this.setState({showAlcie:true})
					}}>Elton Orzz</RB.Button>
					<div>
						 <Nav bsStyle="pills" activeKey={1} onSelect={(e)=>{
						 	console.log(e)
						 	switch(e){
						 		case 1:
						 			window.location.href = 'http://www.baidu.com'
						 			break;
						 		case 2:
						 			window.location.href = 'http://www.google.com.hk'
						 			break;
						 		default:
									return;
						 	}
						 }}>
						    <NavItem eventKey={1} href="./cheng.html">'s Personal Blog</NavItem>
						    <NavItem eventKey={2} title="Item">You Are Pretty</NavItem>
						    <NavItem eventKey={3} disabled>The Way You Are</NavItem>
						  </Nav>
					</div>
				</div>)
	}
}
	         		// <button onClick={this.goleft}>rightB</button>
	         	    // <button style={defaultstyles.rightbuttonstyle}onClick = { this.goright}>LeftB</button>
var App = React.createClass({
    getInitialState: function() {
        return { LeftsidebarOpen: true,
        		RightsidebarOpen:true
         };
    },

    onSetSidebarOpen: function(open) {
        this.setState({ sidebarOpen: open });
    },
    goleft: function() {
        console.log('hehehe');
        this.setState({ LeftsidebarOpen: !this.state.LeftsidebarOpen })
    },
    goright: function() {
        console.log('hehehe');
        this.setState({ RightsidebarOpen: !this.state.RightsidebarOpen })
    },
	render: function() {
	    var sidebarContent = ( 
	    	<div id='sidecnt'> 
	    		<div> 
	    		</div> 
	    		<div>
	        	</div>
	        </div> 
	    );

	    return ( 
	    <div style = {{zIndex:100,position:'absolute'}}>
	    <ReactSidebar sidebar = { sidebarContent } docked = { this.state.LeftsidebarOpen } >

	        <div>
	         	<ReactSidebar sidebar={sidebarContent} pullRight = {true} docked = {this.state.RightsidebarOpen} >

	         	     <div><Articles1 ></Articles1></div> 

                     <div id = 'fuck'>
					 fuck
                     </div>
	         	</ReactSidebar>
	        </div> 
	    </ReactSidebar>
	    </div>
	    );
	}
});
module.exports = App;
ReactDOM.render( < Try / > , document.getElementById('root'))
