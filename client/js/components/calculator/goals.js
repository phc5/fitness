import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Goals extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();
		this.props.dispatch(actions.calculateGoals(event.target.goal.value));
	}

	render() {
		return (
			<section>
				<h2 className="marg-bottom">Fitness Goals</h2>
				<section id="goals">
					<form onSubmit={this._submit.bind(this)} className="flex-between">
						<section>
							<h3>Lose Weight</h3>
							<input type="radio" name="goal" value="moderate loss"/> Moderate (-15%)<br/>
							<input type="radio" name="goal" value="standard loss"/> Standard (-20%)<br/>
							<input type="radio" name="goal" value="intense loss"/> Intense (-25%)
						</section>

						<section>
							<h3>Maintain</h3>
							<input type="radio" name="goal" value="sedentary"/> Same as TDEE<br/>
						</section>

						<section>
							<h3>Gain Weight</h3>
							<input type="radio" name="goal" value="moderate gain"/> Moderate (+5%)<br/>
							<input type="radio" name="goal" value="standard gain"/> Standard (+10%)<br/>
							<input type="radio" name="goal" value="intense gain"/> Intense (+15%)
						</section>

						<input className="submit" type="submit" value="Calculate with Goal"/>
					</form>

					<section id="goal-output">
						<h3>Your Goal: {this.props.goal}</h3>
					</section>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
        goal: state.goal
    };
};

var Container = connect(mapStateToProps)(Goals);
module.exports = Container