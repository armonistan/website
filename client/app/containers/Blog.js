import React from "react";
import 'whatwg-fetch';
import PostEntryList from "../components/PostEntryList";
import Post from "../components/Post";

export default class Blog extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			postEntryList: "Loading",
			selectedPost: "Loading Post"
		}
		
		fetch('/api/posts')
		.then(res => res.json())
		.then(json => {
			this.setState({
				posts: json
			});
			this.setState({
				postEntryList: <PostEntryList posts={this.state.posts} selectPost={this.selectPost.bind(this)}/>,
				selectedPost: <Post post={this.state.posts[0]}/>,
			});
		});
		
		this.title = "Blog";
	}
	
	selectPost(selectedPost) {
		this.setState({
			selectedPost: <Post post={selectedPost}/>,
		});;
	}
	
	render() {	
		return (
			<div class="component-page">
				<div>{this.title}</div>
				<div className="blog-page">
					{this.state.postEntryList}
					{this.state.selectedPost}
				</div>
			</div>
		);
	}
}