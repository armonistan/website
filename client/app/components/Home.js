import React, { Component } from 'react';
import 'whatwg-fetch';
import PostSnippet from "../components/PostSnippet";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		}
	}
	
	componentDidMount() {
		fetch('/api/posts')
		.then(res => res.json())
		.then(json => {
			this.setState({
				posts: json
			});
      });
	}

	render() {
		return (
		<div className="component-page">
			{ this.state.posts.map((post, i) => (
				<PostSnippet post={post}/>
			))}
		</div>
    );
  }
}

export default Home;
