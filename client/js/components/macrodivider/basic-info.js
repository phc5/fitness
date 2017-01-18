import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class BasicInfo extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();
		this.props.dispatch(actions.calculateDailyMacros(
			event.target.tdee.value, event.target.carb.value, 
			event.target.fat.value, event.target.protein.value));
	}

	render() {
		return (
			<section>
				<form onSubmit={this._submit.bind(this)} className="divider-form">
					<section>
						<h3>TDEE:</h3>
						<input name="tdee" type="text" pattern="^[0-9]*$" required autoComplete="off"/> calories/day
					</section>

					<section>
						<h3>% Carbohydrate</h3>
						<input name="carb" type="text" pattern="^[0-9]*$" required autoComplete="off"/> % 
					</section>
					<section>
						<h3>% Fat</h3>
						<input name="fat" type="text" pattern="^[0-9]*$" required autoComplete="off"/> %
					</section>
					<section>
						<h3>% Protein</h3>
						<input name="protein" type="text" pattern="^[0-9]*$" required autoComplete="off"/> %
					</section>

					<button type="submit">Calculate your daily macros!</button>
				</form>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
 	
    };
};

var Container = connect(mapStateToProps)(BasicInfo);
module.exports = Container