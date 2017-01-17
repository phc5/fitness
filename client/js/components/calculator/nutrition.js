import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Nutrition extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();
		let protein = 0;
		let fat = 0;
		if (event.target.protein.value === 'Custom') {
			protein = event.target.customProtein.value;
		} else {
			protein = event.target.protein.value;
		}

		if (event.target.fat.value === 'Custom') {
			fat = event.target.customFat.value;
		} else {
			fat = event.target.fat.value;
		}
		
		this.props.dispatch(actions.calculateNutrition(protein, fat));
	}

	render() {
		console.log(this.props.nutrition);
		return (
			<section id="nutrition-section">
				<h2 className="marg-bottom">Nutrition</h2>
				<section id="goals">
					<form onSubmit={this._submit.bind(this)} className="flex-between">
						<section>
							<h3>Protein</h3>
							<input type="radio" name="protein" value=".7"/> .7 grams per pound of body weight<br/>
							<input type="radio" name="protein" value=".8"/> .8 grams per pound of body weight<br/>
							<input type="radio" name="protein" value=".9"/> .9 grams per pound of body weight<br/>
							<input type="radio" name="protein" id="custom-protein" value="Custom"/> Custom<br/>
							<input type="text" name="customProtein" id="field-protein" pattern="^[1-9]\d*(\.\d+)?$" readOnly/> grams per pound of body weight<br/>
						</section>

						<section>
							<h3>Fat</h3>
							<input type="radio" name="fat" value=".30"/> .30 grams per pound of body weight<br/>
							<input type="radio" name="fat" value=".35"/> .35 grams per pound of body weight<br/>
							<input type="radio" name="fat" value=".40"/> .40 grams per pound of body weight<br/>
							<input type="radio" name="fat" id="custom-fat" value="Custom"/> Custom<br/>
							<input type="text" name="customFat" id="field-fat" pattern="^[1-9]\d*(\.\d+)?$" readOnly/> grams per pound of body weight<br/>
						</section>

						<section id="nutrition-carb">
							<h3>Carbs</h3>
							<p>Your carbs will be calculated based on the calories from protein and fat subtracted from your TDEE.</p>
						</section>

						<input className="submit" type="submit" value="Calculate Your Macros!"/>
					</form>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
       	protein: state.protein,
       	fat: state.fat,
       	carbs: state.carbs
    };
};

var Container = connect(mapStateToProps)(Nutrition);
module.exports = Container