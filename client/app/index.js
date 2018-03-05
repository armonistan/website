import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import './style/app.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './containers/About';
import Blog from './containers/Blog';
import Landing from './containers/Landing';
import Projects from './containers/Projects';

import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Header/>
			<Route path="/" exact component={Landing}></Route>
			<Route path="/about" exact component={About}></Route>
			<Route path="/blog" exact component={Blog}></Route>
			<Route path="/home" exact component={Landing}></Route>
			<Route path="/projects" exact component={Projects}></Route>
			<Footer/>
		</div>
	</BrowserRouter>, app);
registerServiceWorker();
