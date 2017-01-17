import React, {Component} from "react";
import BMR from './bmr';
import Activity from './activity-level';
import Goals from './goals';

class Calculator extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="calculator-container">
				<h1 className="title">MacroCalculator</h1>
				<BMR />
				<hr/>
				<Activity />
				<hr/>
				<Goals />
				<hr/>

				<section id="results" className="calc-section">

				</section>

			</section>
		);
	}
}

export default Calculator;