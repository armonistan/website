import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {	
	constructor(){
		super();
		this.navigationOptions = [
			<Link to="home">Home</Link>,
			<Link to="about">About</Link>,
			<Link to="posts">Posts</Link>,
			<Link to="projects">Projects</Link>
		];
	}
	
	render() {
		return (
			<div>
				{this.navigationOptions}
			</div>
		);
	}
}