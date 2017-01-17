import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class BMR extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();

		const form = event.target;

		this.props.dispatch(actions.calculateBMR(
			form.gender.value, form.age.value,
			form.feet.value, form.inches.value,
			form.pounds.value)
		);
	}

	render() {
		return (
			<section className="bmr-container">
				<section id="bmr">
					<h2 className="marg-bottom">Basic Information</h2>
					<form onSubmit={this._submit.bind(this)} className="flex-between">
						<section>
						<h2>Gender</h2>
						<input type="radio" name="gender" value="male" /> Male<br/>
						<input type="radio" name="gender" value="female"/> Female
						</section>

						<section>
						<h2>Age</h2>
						<input type="text" pattern="^[0-9]*$" name="age" required autoComplete="off"/> years
						</section>

						<section>
						<h2>Height</h2>
						<input type="text" pattern="^[0-9]*$" name="feet" required autoComplete="off"/> feet&nbsp;
						<input type="text" pattern="^[0-9]*$" name="inches" required autoComplete="off"/> inches
						</section>

						<section>
						<h2>Weight</h2>
						<input type="text" pattern="^[0-9]*$" name="pounds" required autoComplete="off"/> pounds<br/>
						</section>

						<input className="submit" type="submit" value="Calculate BMR"/>
					</form>
					
					<section id="bmr-output">
						<h3>Your BMR: {this.props.BMR}</h3>
					</section>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
        BMR: state.BMR
    };
};

var Container = connect(mapStateToProps)(BMR);
module.exports = Container

