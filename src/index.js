import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from "react-router-dom";

import './style/app.css';

import Header from './components/Header';
import About from './containers/About';
import Blog from './containers/Blog';
import Home from './containers/Home';
import Projects from './containers/Projects';

import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
	<HashRouter>
		<div>
			<Header></Header>
			<Route path="/archives" exact component={Archives}></Route>
			<Route path="/settings" exact component={Settings}></Route>
		</div>
	</HashRouter>, app);
registerServiceWorker();
