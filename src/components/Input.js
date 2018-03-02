import React from "react";

export default class Header extends React.Component {	
	constructor(title) {
		super();
		this.state = {
			name: "Hello World"
		}
		this.props = {
		}
	}
	
	render() {
		var timeout = Math.floor((Math.random() * 10) + 1)*1000;
		
		setTimeout(() => { 
			this.setState({
				name: "Goodbye World"
			})
		}, timeout)
		
		
		return (
			<h1>{this.props.title} {timeout}</h1>
		);
	}
}