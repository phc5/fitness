import actions from '../actions/actions';

const initialState = {
	bodyWeight: 0,
	BMR: "",
	TDEE: "",
	goal: "",
	goalWord: "",
	fat: "",
	carbs: "",
	protein: ""

}

const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.CALCULATE_BMR) {
		const totalInches = Number(action.feet) * 12 + Number(action.inches);
		if (action.gender === 'male') {
			const BMR = 66 + (6.23 * Number(action.weight)) + (12.7 * totalInches) - (6.8 * Number(action.age));
			state.BMR = BMR.toFixed(2).toString() + " calories/day";
		} else if (action.gender === 'female') {
			const BMR = 655 + (4.35 * leanMass) + (4.7 * totalInches) - (4.7 * Number(action.age));
			state.BMR = BMR.toFixed(2).toString() + " calories/day";
		}
		state.bodyWeight = action.weight;
	} else if (action.type === actions.CALCULATE_TDEE) {
		let TDEE = 0;
		const BMR = state.BMR.slice(0,7);
		if (action.activity === 'sedentary') {
			TDEE = BMR * 1.2;
		} else if (action.activity === 'lightly-active') {
			TDEE = BMR* 1.375;
		} else if (action.activity === 'moderately-active') {
			TDEE = BMR * 1.55;
		} else if (action.activity === 'very-active') {
			TDEE = BMR * 1.725;
		} else if (action.activity === 'extremely-active') {
			TDEE = BMR * 1.9;
		}
		state.TDEE = TDEE.toFixed(2).toString() + " calories/day";
	} else if (action.type === actions.CALCULATE_GOALS) {
		let goal = 0;
		state.goalWord = action.goal;
		const TDEE = state.TDEE.slice(0,7);
		if (action.goal === 'moderate loss') {
			goal = TDEE * .85;
		} else if (action.goal === 'standard loss') {
			goal = TDEE * .80;
		} else if (action.goal === 'intense loss') {
			goal = TDEE * .75;
		} else if (action.goal === 'sedentary') {
			goal = TDEE
		} else if (action.goal === 'moderate gain') {
			goal = TDEE * 1.05;
		} else if (action.goal === 'standard gain') {
			goal = TDEE * 1.10;
		} else if (action.goal === 'intense gain') {
			goal = TDEE * 1.15;
		}
		state.goal = goal.toFixed(2).toString() + " calories/day";
	} else if (action.type === actions.CALCULATE_BODY_TYPE) {
		if (action.bodyType === 'ectomorph') {
			if (state.goalWord === 'moderate loss') {
				state.carbs = (state.goal.slice(0,7) * .40) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goal.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'standard loss') {
				state.carbs = (state.goal.slice(0,7) * .35) / 4;
				state.protein = (state.goal.slice(0,7) * .30) / 4;
				state.fat = (state.goal.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'intense loss') {
				state.carbs = (state.goal.slice(0,7) * .30) / 4;
				state.protein = (state.goal.slice(0,7) * .30) / 4;
				state.fat = (state.goal.slice(0,7) * .40) / 9;
			} else if (state.goalWord === 'sedentary') {
				state.carbs = (state.goal.slice(0,7) * .45) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goal.slice(0,7) * .30) / 9;
			} else if (state.goalWord === 'moderate gain') {
				state.carbs = (state.goal.slice(0,7) * .50) / 4;
				state.protein = (state.goal.slice(0,7) * .30) /4 ;
				state.fat = (state.goal.slice(0,7) * .20) / 9;
			} else if (state.goalWord === 'standard gain') {
				state.carbs = (state.goal.slice(0,7) * .55) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goal.slice(0,7) * .20) / 9;
			} else if (state.goalWord === 'intense gain') {
				state.carbs = (state.goal.slice(0,7) * .60) / 4;
				state.protein = (state.goal.slice(0,7) * .20) / 4;
				state.fat = (state.goal.slice(0,7) * .20) / 9;
			}
		} else if (action.bodyType === 'mesomorph') {
			if (state.goalWord === 'moderate loss') {
				state.carbs = (state.goal.slice(0,7) * .30) / 4;
				state.protein = (state.goal.slice(0,7) * .30) / 4;
				state.fat = (state.goal.slice(0,7) * .40) / 9;
			} else if (state.goalWord === 'standard loss') {
				state.carbs = (state.goal.slice(0,7) * .25) / 4;
				state.protein = (state.goal.slice(0,7) * .30) / 4;
				state.fat = (state.goal.slice(0,7) * .45) / 9;
			} else if (state.goalWord === 'intense loss') {
				state.carbs = (state.goal.slice(0,7) * .20) / 4;
				state.protein = (state.goal.slice(0,7) * .40) / 4;
				state.fat = (state.goal.slice(0,7) * .40) / 9;
			} else if (state.goalWord === 'sedentary') {
				state.carbs = (state.goal.slice(0,7) * .35) / 4
				state.protein = (state.goal.slice(0,7) * .30) / 4;
				state.fat = (state.goal.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'moderate gain') {
				state.carbs = (state.goal.slice(0,7) * .40) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goa.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'standard gain') {
				state.carbs = (state.goal.slice(0,7) * .45) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goal.slice(0,7) * .30) / 9;
			} else if (state.goalWord === 'intense gain') {
				state.carbs = (state.goal.slice(0,7) * .50) / 4;
				state.protein = (state.goal.slice(0,7) * .25) / 4;
				state.fat = (state.goal.slice(0,7) * .25) / 9;
			}
		} else if (action.bodyType === 'endomorph') {
			if (state.goalWord === 'moderate loss') {
				state.carbs = (state.goal.slice(0,7) * .20) / 4;
				state.protein = (state.goal.slice(0,7) * .50) / 4;
				state.fat = (state.goal.slice(0,7) * .30) / 9;
			} else if (state.goalWord === 'standard loss') {
				state.carbs = (state.goal.slice(0,7) * .15) / 4;
				state.protein = (state.goal.slice(0,7) * .50) / 4;
				state.fat = (state.goal.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'intense loss') {
				state.carbs = (state.goal.slice(0,7) * .10) / 4;
				state.protein = (state.goal.slice(0,7) * .50) / 4;
				state.fat = (state.goal.slice(0,7) * .40) / 9;
			} else if (state.goalWord === 'sedentary') {
				state.carbs = (state.goal.slice(0,7) * .25) / 4;
				state.protein = (state.goal.slice(0,7) * .40) / 4;
				state.fat = (state.goal.slice(0,7) * .35) / 9;
			} else if (state.goalWord === 'moderate gain') {
				state.carbs = (state.goal.slice(0,7) * .30) / 4;
				state.protein = (state.goal.slice(0,7) * .50) / 4;
				state.fat = (state.goal.slice(0,7) * .20) / 9;
			} else if (state.goalWord === 'standard gain') {
				state.carbs = (state.goal.slice(0,7) * .35) / 4;
				state.protein = (state.goal.slice(0,7) * .45) / 4;
				state.fat = (state.goal.slice(0,7) * .20) / 9;
			} else if (state.goalWord === 'intense gain') {
				state.carbs = (state.goal.slice(0,7) * .35) / 4;
				state.protein = (state.goal.slice(0,7) * .40) / 4;
				state.fat = (state.goal.slice(0,7) * .25) / 9;
			}
		}
		state.carbs = state.carbs.toFixed(2).toString() + " grams/day";
		state.fat = state.fat.toFixed(2).toString() + " grams/day";
		state.protein = state.protein.toFixed(2).toString() + " grams/day";
	}

	console.log(state);
	return state;
}

exports.reducer = reducer;