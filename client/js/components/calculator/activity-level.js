import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Activity extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();
		this.props.dispatch(actions.calculateTDEE(event.target.activity.value));
	}

	render() {
		return (
			<section id="activity-level">
				<h2>Activity Level</h2>
				<form onSubmit={this._submit.bind(this)} className="flex-between">
					<section>
						<input type="radio" name="activity" value="sedentary"/> Sedentary (little or no exercise)<br/>
						<input type="radio" name="activity" value="lightly-active"/> Lightly Active (light exercise/sports 1-3 days per week)<br/>
						<input type="radio" name="activity" value="moderately-active"/> Moderately Active (moderate exercise/sports 3-5 days per week)<br/>
						<input type="radio" name="activity" value="very-active"/> Very Active (hard exercise/sports 6-7 days a week)<br/>
						<input type="radio" name="activity" value="extremely-active"/> Extremely Active (very hard exercise/sports & physical job or 2x training)
					</section>
					<input className="submit" type="submit" value="Calculate TDEE"/>
				</form>

				<section id="tdee-output">
					<h3>Your TDEE: {this.props.TDEE}</h3>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
        TDEE: state.TDEE
    };
};

var Container = connect(mapStateToProps)(Activity);
module.exports = Container