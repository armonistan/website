import React from "react";

export default class Footer extends React.Component {	
	constructor(){
		super();
		this.email = "armonnayeraini@gmail.com";
	}
	
	render() {
		return (
			<div className="footer">
				{this.email}
			</div>
		);
	}
}