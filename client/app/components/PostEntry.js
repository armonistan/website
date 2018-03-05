import React from "react";

export default class PostEntry extends React.Component {	
	constructor(){
		super();
	}
	
	handleOnClick(){
		console.log(this);
		this.props.handleOnClick(this.props.post);
	}	
	
	render() {
		return (
			<div onClick={this.handleOnClick.bind(this)} className="post-entry">
				<div className="title">
					{this.props.post.title}
				</div>
				<div className="date">
					{this.props.post.date}
				</div>
			</div>
		);
	}
}
