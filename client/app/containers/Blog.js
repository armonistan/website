import React from "react";
import PostEntryList from "../components/PostEntryList";

export default class Blog extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: true
		}
		this.title = "Blog";
	}
	
	changeTitle(title) {
		this.title = title;
		this.setState({refresh: true});
	}
	
	render() {	
		return (
			<div>
				<div>{this.title}</div>
				<PostEntryList/>
			</div>
		);
	}
}