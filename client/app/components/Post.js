import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class Post extends React.Component {	
	constructor(){
		super();
		console.log("post");
	}
	
	render() {
		return (
			<div className="post">
				<div className="title">
					{this.props.post.title}
				</div>
				<div className="date">
					{this.props.post.date}
				</div>
				<div>
					{ReactHtmlParser(this.props.post.content)}
				</div>
			</div>
		);
	}
}