import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import Paper from 'material-ui/Paper';
import {
	Step,
	Stepper,
	StepLabel,
	StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
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
		let nextButton = null;
		if (this.state.stepIndex < 3) {
			nextButton = (
				<RaisedButton
					label='Next'
					onTouchTap={this.handleNext.bind(this)}
					style={{marginRight: 12}}
					primary={true}
				/>
			);
		}
		return (
			<div style={{margin: '12px 0', display: 'inline-block'}}>
				{nextButton}
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
		const radioStyles = {
		  block: {
		    maxWidth: 250,
		  },
		  radioButton: {
		    marginBottom: 16,
		  },
		};
		const paperStyles = {
			padding: 30,
			width: '75%',
			margin: 'auto'
		}
		const subheaderStyles = {
			paddingLeft: 0,
			fontSize: 20
		}
		const stepLabelStyles = {
			fontSize: 25
		}
		const resultPaperStyle = {
			width: '33%',
			textAlign: 'center'
		}
		let results = "";
		if (!this.props.dividerError) {
			results = (
				<section>
					<h2>Results</h2>
					<section id="results">
						<Paper rounded={false} style={resultPaperStyle} zDepth={1}>
							<Subheader style={subheaderStyles}>Carbs</Subheader>
							<p>{this.props.carb}</p>
						</Paper>
						<Paper rounded={false} style={resultPaperStyle} zDepth={1}>
							<Subheader style={subheaderStyles}>Fat</Subheader>
							<p>{this.props.fat}</p>
						</Paper>
						<Paper rounded={false} style={resultPaperStyle} zDepth={1}>
							<Subheader style={subheaderStyles}>Protein</Subheader>
							<p>{this.props.protein}</p>
						</Paper>
					</section>
				</section>
			);
		} else {
			results = (
				<section>
					<h2>Results</h2>
					<section id="results">
						<p>Percentages dont add up to 100. Please check your percentages!</p>
					</section>
				</section>
			);
		}
		console.log(results);
		return (
			<section className="calculator-container">
				<a href="/" className="title"><h1 style={{fontSize: 70 + 'px'}}>MacroCalculator</h1></a>
				<Paper style={paperStyles} zDepth={5} >
					<Stepper activeStep={stepIndex} orientation="vertical">
						<Step>
							<StepLabel style={stepLabelStyles}>Basic Information</StepLabel>
							<StepContent>
								<form id="BMR-form">
									<section>
										<Subheader style={subheaderStyles}>Gender</Subheader>
										<RadioButtonGroup name="gender">
									    	<RadioButton
										        value="male"
										        label="Male"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="female"
										        label="Female"
										        style={radioStyles.radioButton}
										    />
										</RadioButtonGroup>
									</section>

									<section>
										<TextField name="age" pattern="^[0-9]*$" floatingLabelText="Age" required autoComplete="off" hintText="Your age."/> 
									</section>

									<section>
										<TextField name="feet" pattern="^[0-9]*$" floatingLabelText="Feet" required autoComplete="off" hintText="Your height in feet."/> 
										<TextField name="inches" pattern="^[0-9]*$" floatingLabelText="Inches" required autoComplete="off" hintText="Your height in inches."/> 
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
									style={{marginRight: 12}}
									onClick={this._clickBMR.bind(this)}
									backgroundColor="#FFC107"
								/>
								{this.renderStepActions(0)}
							</StepContent>
						</Step>

						<Step>
							<StepLabel style={stepLabelStyles}>Daily Activity Level</StepLabel>
							<StepContent>
								<form id="activity-form">
									<section>
										<Subheader style={subheaderStyles}>Which choice best describes your day?</Subheader>
										<RadioButtonGroup name="activity">
									    	<RadioButton
										        value="sedentary"
										        label="Sedentary (little or no exercise)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="lightly-active"
										        label="Lightly Active (light exercise/sports 1-3 days per week)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="moderately-active"
										        label="Moderately Active (moderate exercise/sports 3-5 days per week)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="very-active"
										        label="Very Active (hard exercise/sports 6-7 days a week)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="extremely-active"
										        label="Extremely Active (very hard exercise/sports & physical job or 2x training)"
										        style={radioStyles.radioButton}
										    />
										</RadioButtonGroup>
									</section>
								</form>

								<section id="tdee-output">
									<h3>Your TDEE: {this.props.TDEE}</h3>
								</section>
								<RaisedButton
									label='Calculate TDEE'
									style={{marginRight: 12}}
									onClick={this._clickActivity.bind(this)}
									backgroundColor="#FFC107"
								/>
								{this.renderStepActions(1)}
							</StepContent>
						</Step>

						<Step>
							<StepLabel style={stepLabelStyles}>Goals</StepLabel>
							<StepContent>
								<form id="goal-form" className="flex-between">
									<section className="goal-col">
										<Subheader style={subheaderStyles}>Lose Fat</Subheader>
										<RadioButtonGroup name="goal">
									    	<RadioButton
										        value="moderate loss"
										        label="Moderate (-15%)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="standard loss"
										        label="Standard (-20%)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="intense loss"
										        label="Intense (-25%)"
										        style={radioStyles.radioButton}
										    />
										</RadioButtonGroup>
									</section>

									<section className="goal-col">
										<Subheader style={subheaderStyles}>Maintain</Subheader>
										<RadioButtonGroup name="goal">
									    	<RadioButton
										        value="sedentary"
										        label="Same as TDEE"
										        style={radioStyles.radioButton}
										    />
										</RadioButtonGroup>
									</section>

									<section className="goal-col">
										<Subheader style={subheaderStyles}>Gain Muscle</Subheader>
										<RadioButtonGroup name="goal">
									    	<RadioButton
										        value="moderate gain"
										        label="Moderate (+5%)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="standard gain"
										        label="Standard (+10%)"
										        style={radioStyles.radioButton}
										    />
										    <RadioButton
										        value="intense gain"
										        label="Intense (-15%)"
										        style={radioStyles.radioButton}
										    />
										</RadioButtonGroup>
									</section>
								</form>

								<section id="goal-output">
									<h3>Your Goal: {this.props.goal}</h3>
								</section>
								<RaisedButton
									label='Calculate TDEE with Goal'
									style={{marginRight: 12}}
									onClick={this._clickGoal.bind(this)}
									backgroundColor="#FFC107"
								/>
								{this.renderStepActions(2)}
							</StepContent>
						</Step>

						<Step>
							<StepLabel style={stepLabelStyles}>Divide Your Macros</StepLabel>
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
								{results}
								<RaisedButton
									label='Calculate Macros'
									style={{marginRight: 12}}
									onClick={this._clickMacro.bind(this)}
									backgroundColor="#FFC107"
								/>
								{this.renderStepActions(3)}
							</StepContent>
						</Step>
					</Stepper>		
				</Paper>
			</section>
			);
	}
}
const mapStateToProps = function (state, props) {
    return {
        BMR: state.BMR,
        TDEE: state.TDEE,
        goal: state.goal,
        protein: state.protein,
       	fat: state.fat,
       	carb: state.carb,
       	dividerError: state.dividerError
    };
};

var Container = connect(mapStateToProps)(Calculator);
module.exports = Container