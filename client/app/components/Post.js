import React from "react";

export default class Post extends React.Component {	
	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}
	
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<input onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}