import actions from '../actions/actions';

const initialState = {
	bodyWeight: 0,
	BMR: "",
	TDEE: "",
	goal: "",
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
	} else if (action.type === actions.CALCULATE_NUTRITION) {
		const fat = action.fat * state.bodyWeight;
		console.log(fat);
		const protein = action.protein * state.bodyWeight;
		const carbs = (state.goal.slice(0,7) - (fat * 9) - (protein * 4)) / 4;
		
		state.fat = fat.toFixed(2).toString() + "g";
		state.protein = protein.toFixed(2).toString() + "g";
		state.carbs = carbs.toFixed(2).toString() + "g"; 
	}

	console.log(state);
	return state;
}

exports.reducer = reducer;