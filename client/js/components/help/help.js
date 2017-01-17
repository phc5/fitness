import React, {Component} from "react";

class Help extends Component {

	componentDidMount() {
		
	}

	render() {
		//list temp: <li><b><u></u></b></li><br />
		return (
			<section >
				<section className="help-container">
					<h1 className="title">What is <a href="/" className="title">MacroCalculator</a></h1>
					
					<h3 id="summary">MacroCalculator is a tool that provides estimates on your total daily energy expenditure, or TDEE, and breaksdown your daily macronutrients.</h3>

					<section className="help-col2">
						<ol className="how-it-works">
							<h3>How it works</h3>
							<li>Initially, MacroCalculator calculates your BMR (<a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate#BMR_estimation_formulas" target="_blank">Basal Metabolic Rate</a>) using your gender, age, weight, and height.</li>
							<li>MacroCalculator then uses your BMR and daily activity level to calculate your TDEE using the <a href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation" target="_blank">Harris-Benedict Equation</a>.</li>
							<li>After calculating your TDEE, MacroCalculator asks for your fitness goals and how you want to partition your protein and fat to finally calculate your macronutrient breakdown.</li>
							<li>Now all you have to do is log your food and track your macros to reach your goals!</li>
						</ol>
						
						<ul className="meanings">
							<h3>Meanings</h3>
							<li><b><u>BMR (Basal Metabolic Rate)</u></b>: is the minimal rate of energy expenditure per unit time by endothermic animals at rest.</li><br />
							<li><b><u>TDEE (Total Daily Energy Expenditure)</u></b>: s an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.</li><br />
							<li><b><u>Macros</u></b>: short for macronutrients and are comprised of protein, fat, and carbohydrate.</li><br />
						</ul>
					</section>
				</section>
				<p className="disclaimer"><strong><u>Disclaimer:</u></strong> The calculator CANNOT account for your metabolic health and as a result, If you have been dieting for any length of time, the results it gives you might need to be adjusted to fit your personal needs. The Content on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.</p>
			</section>
		);
	}
}

export default Help;