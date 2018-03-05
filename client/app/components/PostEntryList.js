import React from "react";
import PostEntry from "./PostEntry";

export default class PostEntryList extends React.Component {	
	constructor(props){
		super();
		this.state = {
			posts: props.posts
		}
	}
	
	selectPost(post){
		this.props.selectPost(post);
	}
	
	render() {
		return (
			<div className="post-entry-list">
				{ this.state.posts.map((post, i) => (
					<div key={i}>
						<PostEntry post={post} handleOnClick={this.selectPost.bind(this)}/>
					</div>
				))}
			</div>
		);
	}
}