import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class PostSnippet extends React.Component {	
	constructor(){
		super();
	}
	
	render() {
		return (
			<div className="post-snippet">
				<div className="title">
					{this.props.post.title}
				</div>
				<div className="date">
					{this.props.post.date}
				</div>
				<div>
					{ReactHtmlParser(this.props.post.content)}
				</div>
				<div align="center">
					{ this.props.post.tags.map((tag, i) => (
						<span className="tag">{tag}</span>
					))}
				</div>
			</div>
		);
	}
}