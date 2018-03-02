import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: true
		}
		this.title = "Hello";
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
				<h1 className="green-text"> Oh snap </h1>
				<Link to=""> home </Link>
				<Link to="archives">archives</Link>
				<Link to="settings">settings</Link>
			</div>
		);
	}
}