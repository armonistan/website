import React from "react";

export default class PostEntry extends React.Component {	
	constructor(){
		super();
		this.post = {
			title: "Hello World",
			description: "Test Post 101",
			imageSource: "https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg?odnBound=460"
		};
	}
	
	render() {
		return (
			<div>
				<div>{this.post.title}</div>
				<div>{this.post.description}</div>
				<img src={this.post.imageSource} width="200" height="200"/>
			</div>
		);
	}
}