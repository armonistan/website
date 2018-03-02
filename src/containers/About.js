import React from "react";
import Header from "../components/Header";

export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: true
		}
		this.title = "About";
	}
	
	changeTitle(title) {
		this.title = title;
		this.setState({refresh: true});
	}
	
	render() {
		this.list = [
			<Header title={this.title} changeTitle={this.changeTitle.bind(this)}/>,
			<Header title="World" changeTitle={this.changeTitle.bind(this)}/>
		]
		
		return (
			<div>
				{this.title}
			</div>
		);
	}
}