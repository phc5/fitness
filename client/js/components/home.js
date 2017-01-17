/*TODO: incorporate login on start button */

import React, {Component} from "react";

class Home extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="home-container">
				<h1 className="title">Welcome to MacroCalculator!</h1>
				<a href="#/calculator"><button className="menu-button">Start</button></a>
				<a href="#/help"><button className="menu-button">Help</button></a>
			</section>
		);
	}
}

export default Home;