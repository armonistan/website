import React from "react";
import {Link} from "react-router-dom";
import Home from "../components/Home";

export default class Landing extends React.Component {
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
		return (
			<div className="full-page">
				<Home/>
			</div>
		);
	}
}