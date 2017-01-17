import React, {Component} from "react";

class Help extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="help-container">
				<h1 className="title">What is <a href="/" className="title">MacroCalculator</a></h1>
				
				<h3>MacroCalculator is a tool that provides estimates on your total daily energy expenditure, or TDEE, and breaksdown your daily macronutrients.</h3>

				<p>Initially, MacroCalculator calculates your BMR (<a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate#BMR_estimation_formulas" target="_blank">Basal Metbolic Rate</a>) using your gender, age, <a href="https://en.wikipedia.org/wiki/Lean_body_mass" target="_blank">lean body mass</a>, and height. MacroCalculator then uses your BMR and daily activity level to calculate your TDEE using the <a href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation" target="_blank">Harris-Benedict Equation</a>. After calculating your TDEE, MacroCalculator asks for your fitness goals and how you want to partition your protein and fat to finally calculate your macronutrient breakdown.</p>
				<p>Your BMR is the number of calories your body burns at rest. Your TDEE is your BMR, plus all the calories you burn through work, play, exercise and even digesting food. Now that you have your TDEE, you can adjust your calories based on your goals, then split those calories between your macros (carbs, protein and fat) that will preserve muscle, burn fat, and regulate hormones so your mood is elevated and your cravings are reduced.</p>
				<p>MacroCalculator takes into account your activity levels and goals so all you have to do is log your food and track your macros to reach your goals!</p>

				<p className="disclaimer"><strong><u>Disclaimer:</u></strong> The calculator CANNOT account for your metabolic health and as a result, If you have been dieting for any length of time, the results it gives you might need to be adjusted to fit your personal needs. The Content on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.</p>
			</section>
		);
	}
}

export default Help;