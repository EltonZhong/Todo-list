import React from 'react'
import ReactDOM from 'react-dom'

export default class TopMenu extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
           hide :false,
           hideelse : false
        };
    }

    homePage(){
    	console.log('homePage')
    }


    gethrefs(){
    	let m=(<div>
    			<a href = 'kkk'>Homepage</a>
    			<a href = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toHomePage}>Homepage</a>
    			<a onClick = {this.toArticle}>Article</a>
    		</div>)

    	return m;
    }

    render(){
    	return this.gethrefs()
    }
}
