
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from "./store/index";
import { addArticle } from "./actions/index";
window.store = store;
window.addArticle = addArticle;
import { Provider } from "react-redux";



ReactDOM.render(
	  <Provider store={store}>
<Router>
	<div>
      <Route exact path="/" component={App} />
	  <Route exact path="/home" component={Home} />
	</div>
</Router>
	</Provider>,document.getElementById("root"));