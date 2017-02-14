import React from 'react'
import ReactDOM from 'react-dom'
import ReactSidebar from 'react-sidebar'
import TopMenu from './main1'
import Search from 'react-search'
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
			????????
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
		return (
		<div>
			<Cat page = {this.state.page} maxpage = {this.state.maxpage} />
			<button onClick={this.nextPage}>nextPage</button>
			<button onClick={this.prevPage}>prevPage</button>
		</div>);
	}
});

const defaultstyles={
rightbuttonstyle: {
    position: 'inherit',
    right: 0
  },
};

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
	    			Sidebar content 
	    		</div> 
	    		<div>
	        		gogogogo 
	        	</div>
	        </div> 
	    );
		var options = [
            { value: "Don't specify", id: "0" },
            { value: "Contact Page", id: "1"},
            { value: "Search Page", id: "2"},
            { value: "Conversation action page", id: "3"}
        ];
	    return ( 

	    <ReactSidebar sidebar = { sidebarContent } docked = { this.state.LeftsidebarOpen } >

	        <div>
	         	<ReactSidebar sidebar={sidebarContent} pullRight = {true} docked = {this.state.RightsidebarOpen} >
	         		<TopMenu />
	         		<button onClick={this.goleft}>rightB</button>
	         	    <button style={defaultstyles.rightbuttonstyle}onClick = { this.goright}>LeftB</button>
	         	     <div><Articles1 >来了</Articles1></div> 
	         	     <div>
                        <Search items={options}
                            placeholder='select'
                            maxSelected={1}
                            multiple={false}
                            onItemsChanged={alert(1)} 
                        />

                	</div>
	         	</ReactSidebar>
	        </div> 
	    </ReactSidebar>

	    );
	}
});

module.exports = App;
ReactDOM.render( < App / > , document.getElementById('wait'))



