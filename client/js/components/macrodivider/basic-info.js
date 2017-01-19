import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
				<h2>Basic Information</h2>
				<form onSubmit={this._submit.bind(this)} className="divider-form">
					<section>
						<TextField name="tdee" pattern="^[0-9]*$" floatingLabelText="TDEE" required autoComplete="off" hintText="Total Calories per Day"/> 
					</section>

					<section>
						<TextField name="carb" pattern="^[0-9]*$" floatingLabelText="% Carbohydrate" required autoComplete="off" hintText="% of Carb to Consume per Day"/>
					</section>
					<section>
						<TextField name="fat" pattern="^[0-9]*$" floatingLabelText="% Fat" required autoComplete="off" hintText="% of Fat to Consume per Day"/>
					</section>
					<section>
						<TextField name="protein" pattern="^[0-9]*$" floatingLabelText="% Protein" required autoComplete="off" hintText="% of Protein to Consume per Day"/>
					</section>

					<FlatButton type="submit" label="Calculate Your Daily Macros!" backgroundColor="#FFC107"/>
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