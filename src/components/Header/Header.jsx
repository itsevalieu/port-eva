<<<<<<< HEAD
import React from "react";
import "./Header.css";
import {Link} from "react-router";
//import logo from "./logo.png";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<header>
			<nav role="navigation" className="z-depth-5">
				<div className="nav-wrapper container">
					<Link to="/" className="brand-logo" style={brandStyle}>
						{/*<img src="{logo}" alt="logo" className="App-logo"/>*/}
						<span id="eva">EVA</span>
						<span id="lieu"> LIEU</span>
					</Link>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/contact">Contact</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/resume">Resume</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/portfolio">Portfolio</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</nav>
		</header>
	);
=======
import React from "react";
import "./Header.css";
import {Link} from "react-router";
import logo from "./logo.png";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<header>
			<nav role="navigation" className="z-depth-5">
				<div className="nav-wrapper container">
					<Link to="/" className="brand-logo" style={brandStyle}>
						<img src="{logo}" alt="logo" className="App-logo"/>
						<span id="eva">EVA</span>
						<span id="lieu"> LIEU</span>
					</Link>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/contact">Contact</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/blog">Blog</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/portfolio">Portfolio</Link></li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</nav>
		</header>
	);
>>>>>>> 2ed716a9767afa7bce4de636ad515aa1c99cbf13
}