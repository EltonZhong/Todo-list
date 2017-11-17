import React from 'react'
import {Button} from 'react-bootstrap'
import ReactSidebar from 'react-sidebar'

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
	                     	<Button bsStyle = 'danger'/>
	    		</div> 
	    		<div>
	                     	<Button bsStyle = 'danger'/>
	        	</div>
	        </div> 
	    );

	    return ( 
	    <div style = {{zIndex:100,position:'absolute'}}>
		    <ReactSidebar sidebar = { sidebarContent } docked = { this.state.LeftsidebarOpen } >

		        <div>
		         	<ReactSidebar sidebar={sidebarContent} pullRight = {true} docked = {this.state.RightsidebarOpen} >
	                     <div id = 'fuck'>
	                     	<Button bsStyle = 'danger'/>
	                     </div>
		         	</ReactSidebar>
		        </div> 
		    </ReactSidebar>
	    </div>
	    );
	}
});

export default class Blog extends React.Component{
	render(){
		return (
			<App/>
		)
	}
}