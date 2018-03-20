import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class  PostsService extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};

		this.getPosts = this.getPosts.bind(this);
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

	getPosts() {
		return this.posts;
	}
}