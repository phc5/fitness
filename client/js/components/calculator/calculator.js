import React, {Component} from "react";
import Results from './results';
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import Divider from 'material-ui/Divider';
import {
	Step,
	Stepper,
	StepLabel,
	StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			finished: false,
			stepIndex: 0, 
		};
	}

	componentDidMount() {
		
	}

	_clickBMR(event) {
		event.preventDefault();
		const form = document.getElementById('BMR-form');
		console.log(form.gender.value);
		this.props.dispatch(actions.calculateBMR(
			form.gender.value, form.age.value,
			form.feet.value, form.inches.value,
			form.pounds.value)
		);
	}

	_clickActivity(event) {
		event.preventDefault();
		const form = document.getElementById('activity-form');

		this.props.dispatch(actions.calculateTDEE(form.activity.value));
	}

	_clickGoal(event) {
		event.preventDefault();
		const form = document.getElementById('goal-form');

		this.props.dispatch(actions.calculateGoals(form.goal.value));
	}

	_clickMacro(event) {
		event.preventDefault();
		const form = document.getElementById('macro-form');
		this.props.dispatch(actions.calculateMacros(form.carb.value,
			form.fat.value, form.protein.value));
	}


	handleNext() {
		this.setState({
			stepIndex: this.state.stepIndex + 1,
			finished: this.state.stepIndex >= 2,
		});
	};

	handlePrev() {
		if (this.state.stepIndex > 0) {
			this.setState({stepIndex: this.state.stepIndex - 1});
		}
	};

	renderStepActions(step) {
		return (
			<div style={{margin: '12px 0', display: 'inline-block'}}>
				<RaisedButton
					label={this.state.stepIndex === 3 ? 'Calculate Macros' : 'Next'}
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.state.stepIndex === 3 ? this._clickMacro.bind(this) : this.handleNext.bind(this)}
					style={{marginRight: 12}}
				/>
				{step > 0 && (
					<FlatButton
						label="Back"
						disabled={this.state.stepIndex === 0}
						disableTouchRipple={true}
						disableFocusRipple={true}
						onTouchTap={this.handlePrev.bind(this)}
					/>
				)}
			</div>
		);
	}	

	render() {
		const {finished, stepIndex} = this.state;
		const styles = {
		  block: {
		    maxWidth: 250,
		  },
		  radioButton: {
		    marginBottom: 16,
		  },
		};
		return (
			<section className="calculator-container">
				<a href="/" className="title"><h1 style={{fontSize: 70 + 'px'}}>MacroCalculator</h1></a>
				<Stepper activeStep={stepIndex} orientation="vertical">
					<Step>
						<StepLabel>Basic Information</StepLabel>
						<StepContent>
							<form id="BMR-form">
								<section>
									<RadioButtonGroup name="gender">
								    	<RadioButton
									        value="male"
									        label="male"
									        style={styles.radioButton}
									    />
									    <RadioButton
									        value="female"
									        label="female"
									        style={styles.radioButton}
									    />
									</RadioButtonGroup>
								</section>

								<section>
									<TextField name="age" pattern="^[0-9]*$" floatingLabelText="Age" required autoComplete="off" hintText="Your Age."/> 
								</section>

								<section>
									<TextField name="feet" pattern="^[0-9]*$" floatingLabelText="Feet" required autoComplete="off" hintText="Your Height: Feet."/> 
									<TextField name="inches" pattern="^[0-9]*$" floatingLabelText="Inches" required autoComplete="off" hintText="Your Height: Inches."/> 
								</section>

								<section>
									<TextField name="pounds" pattern="^[0-9]*$" floatingLabelText="Weight" required autoComplete="off" hintText="Your weight in pounds."/> 
								</section>
							</form>
							
							<section id="bmr-output">
								<h3>Your BMR: {this.props.BMR}</h3>
							</section>
							<RaisedButton
								label='Calculate BMR'
								disableTouchRipple={true}
								disableFocusRipple={true}
								primary={true}
								style={{marginRight: 12}}
								onClick={this._clickBMR.bind(this)}
							/>
							{this.renderStepActions(0)}
						</StepContent>
					</Step>

					<Step>
						<StepLabel>Daily Activity Level</StepLabel>
						<StepContent>
							<form id="activity-form" className="flex-between">
								<section>
									<input type="radio" name="activity" value="sedentary"/> Sedentary (little or no exercise)<br/>
									<input type="radio" name="activity" value="lightly-active"/> Lightly Active (light exercise/sports 1-3 days per week)<br/>
									<input type="radio" name="activity" value="moderately-active"/> Moderately Active (moderate exercise/sports 3-5 days per week)<br/>
									<input type="radio" name="activity" value="very-active"/> Very Active (hard exercise/sports 6-7 days a week)<br/>
									<input type="radio" name="activity" value="extremely-active"/> Extremely Active (very hard exercise/sports & physical job or 2x training)
								</section>
							</form>

							<section id="tdee-output">
								<h3>Your TDEE: {this.props.TDEE}</h3>
							</section>
							<RaisedButton
								label='Calculate TDEE'
								disableTouchRipple={true}
								disableFocusRipple={true}
								primary={true}
								style={{marginRight: 12}}
								onClick={this._clickActivity.bind(this)}
							/>
							{this.renderStepActions(1)}
						</StepContent>
					</Step>

					<Step>
						<StepLabel>Goals</StepLabel>
						<StepContent>
							<form id="goal-form" className="flex-between">
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
							</form>

							<section id="goal-output">
								<h3>Your Goal: {this.props.goal}</h3>
							</section>
							<RaisedButton
								label='Calculate TDEE with Goal'
								disableTouchRipple={true}
								disableFocusRipple={true}
								primary={true}
								style={{marginRight: 12}}
								onClick={this._clickGoal.bind(this)}
							/>
							{this.renderStepActions(2)}
						</StepContent>
					</Step>

					<Step>
						<StepLabel>Divide Your Macros</StepLabel>
						<StepContent>
							<form id='macro-form' className="divider-form">
								<section>
									<TextField name="carb" pattern="^[0-9]*$" floatingLabelText="% Carbs" required autoComplete="off" hintText="% of Carbs to Consume per Day"/> 
								</section>
								<section>
									<TextField name="fat" pattern="^[0-9]*$" floatingLabelText="% Fat" required autoComplete="off" hintText="% of Fat to Consume per Day"/> 
								</section>
								<section>
									<TextField name="protein" pattern="^[0-9]*$" floatingLabelText="% Protein" required autoComplete="off" hintText="% of Protein to Consume per Day"/> 
								</section>
							</form>
							{this.renderStepActions(3)}
						</StepContent>
					</Step>
				</Stepper>		
				<Results />
			</section>
			);
	}
}
const mapStateToProps = function (state, props) {
    return {
        BMR: state.BMR,
        TDEE: state.TDEE,
        goal: state.goal
    };
};

var Container = connect(mapStateToProps)(Calculator);
module.exports = Container