import React from "react";
import PostEntry from "./PostEntry";

export default class PostEntryList extends React.Component {	
	constructor(){
		super();
		this.posts = [
			<PostEntry></PostEntry>,
			<PostEntry></PostEntry>,
			<PostEntry></PostEntry>,
			<PostEntry></PostEntry>
		];
	}
	
	render() {
		return (
			<div>
				{this.posts}
			</div>
		);
	}
}