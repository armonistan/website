import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from "react-router-dom";

import './style/app.css';

import Header from './components/Header';
import About from './containers/About';
import Blog from './containers/Blog';
import Landing from './containers/Landing';
import Projects from './containers/Projects';

import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
	<HashRouter>
		<div>
			<Header></Header>
			<Route path="/about" exact component={About}></Route>
			<Route path="/blog" exact component={Blog}></Route>
			<Route path="/home" exact component={Landing}></Route>
			<Route path="/projects" exact component={Projects}></Route>
		</div>
	</HashRouter>, app);
registerServiceWorker();
