import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {	
	constructor(){
		super();
		this.navigationOptions = [
			<Link className="header-text" to="home">Home</Link>,
			<Link className="header-text" to="about">About</Link>,
			<Link className="header-text" to="blog">Blog</Link>,
			<Link className="header-text" to="projects">Projects</Link>
		];
	}
	
	render() {
		return (
			<div className="header row-padding">
				<span className="large-text">{this.navigationOptions}</span>
			</div>
		);
	}
}