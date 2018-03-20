const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
	date: {
		type: String,
		default: ""
	},
	content: {
		type: String,
		default: ""
	},
	title: {
		type: String,
		default: ""
	},
	tags: {
		type: Array,
		default: []
	}
});

module.exports = mongoose.model('Posts', PostsSchema);
