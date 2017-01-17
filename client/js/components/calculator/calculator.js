import React, {Component} from "react";
import BMR from './bmr';
import Activity from './activity-level';
import Goals from './goals';
import Nutrition from './nutrition';
import Results from './results';

class Calculator extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="calculator-container">
				<a href="/" className="title"><h1 style={{fontSize: 70 + 'px'}}>MacroCalculator</h1></a>
				<BMR />
				<hr/>
				<Activity />
				<hr/>
				<Goals />
				<hr/>
				<Nutrition />
				<hr/>
				<Results />
			</section>
		);
	}
}

export default Calculator;