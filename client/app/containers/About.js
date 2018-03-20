import React from "react";
import Header from "../components/Header";

export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: true
		}
		this.title = "About";
	}
	
	changeTitle(title) {
		this.title = title;
		this.setState({refresh: true});
	}
	
	render() {		
		return (
			<div>
				<p>About Me:</p>
				<p>In case you didn't know, my name is Armon Nayeraini. So, who am I? Like any good question, there isn't one answer. I am a developer. I am a designer. I am a gamer. I am a musician. I am an artist. I could go on. But, I think if I had to choose one answer, I would choose this: I am a person who wants to do good with good people.</p>
				<p>&nbsp;</p>
				<hr />
				<p>&nbsp;</p>
				<p>Resume</p>
				<p>Armon Nayeraini<br />armonnayeraini@gmail.com&nbsp;<br /><u>armonnayeraini.com</u>&nbsp;<br />(479)799-5914</p>
				<p><br />Education: <br />University of Arkansas&nbsp;<br />Bachelor of Science in Computer Science with Cum Ludae - Spring 2015<br />GPA: 3.71</p>
				<p><br />Work Experience:</p>
			</div>
		);
	}
}