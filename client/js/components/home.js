/*TODO: incorporate login on start button */

import React, {Component} from "react";

class Home extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section>
				<section className="home-container">
					<h1 className="title">Welcome to MacroCalculator!</h1>
				</section>

				<section className="home-col3">
					<section className="col3-section">
						<h2>First time here?</h2>
						<p>MacroCalculator provides estimates on your total daily energy expenditure and breaksdown your daily macronutrients.</p>
						<a href="#/calculator" className="home-links"><p className="link-button">Click here to get started!</p></a>
					</section>

					<section className="col3-section">
						<h2>Already know your goals?</h2>
						<p>If you already know your TDEE and goals, we have another tool called MacroDivider that will help you divvy up your macros!</p>
						<a href="#/macrodivider" className="home-links"><p className="link-button">Click here to go to MacroDivider!</p></a>
					</section>

					<section className="col3-section">
						<h2>Having trouble?</h2>
						<p>Don't know what a certain word means or what your results mean? We're here to help!</p>
						<a href="#/help" className="home-links"><p className="link-button">Click here to get help!</p></a>
					</section>
				</section>
			</section>
		);
	}
}

export default Home;