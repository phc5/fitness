import React, {Component} from "react";

class Help extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="home-container">
				<h1 className="title">What is MacroCalculator?</h1>
				
				<h3>MacroCalculator is a tool that provides estimates on your total daily energy expenditure, or TDEE, and breaksdown your daily macronutrients.</h3>

				<p>Initially, MacroCalculator calculates your BMR (<a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate#BMR_estimation_formulas" target="_blank">Basal Metbolic Rate</a>) using your gender, age, <a href="https://en.wikipedia.org/wiki/Lean_body_mass" target="_blank">lean body mass</a>, and height.</p>
				<p>MacroCalculator then uses your BMR and daily activity level to calculate your TDEE using the <a href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation" target="_blank">Harris-Benedict Equation</a>.</p>
				<p>After calculating your TDEE, MacroCalculator asks for your fitness goals and how you want to partition your protein and fat to finally calculate your macronutrient breakdown.</p>
				
			</section>
		);
	}
}

export default Help;