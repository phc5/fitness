import actions from '../actions/actions';

const initialState = {
	bodyWeight: 0,
	BMR: "",
	TDEE: "",
	goal: "",
	goalWord: "",
	fat: "",
	carb: "",
	protein: "",
	dividerError: false
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
	} else if (action.type === actions.CALCULATE_MACROS) {
		state.dividerError = false;
		const sum = Number(action.carb) + Number(action.fat) + Number(action.protein);
		console.log(sum);
		if (sum < 100 || sum > 100) {
			state.dividerError = true;
		}
		const tdee = Number(state.TDEE.slice(0,7));
		const carb = ((Number(action.carb) / 100) * tdee) / 4;
		const fat = ((Number(action.fat) / 100) * tdee) / 9;
		const protein = ((Number(action.protein) / 100) * tdee) / 4;

		state.carb = carb.toFixed(2).toString() + " grams/day";
		state.fat = fat.toFixed(2).toString() + " grams/day";
		state.protein = protein.toFixed(2).toString() + " grams/day";
	} else if (action.type === actions.CALCULATE_DAILY_MACROS) {
		state.dividerError = false;
		const sum = Number(action.carb) + Number(action.fat) + Number(action.protein);
		console.log(sum);
		if (sum < 100 || sum > 100) {
			state.dividerError = true;
		}
		const carb = ((Number(action.carb) / 100) * Number(action.tdee)) / 4;
		const fat = ((Number(action.fat) / 100) * Number(action.tdee)) / 9;
		const protein = ((Number(action.protein) / 100) * Number(action.tdee)) / 4;

		state.carb = carb.toFixed(2).toString() + " grams/day";
		state.fat = fat.toFixed(2).toString() + " grams/day";
		state.protein = protein.toFixed(2).toString() + " grams/day";
	}

	console.log(state);
	return state;
}

exports.reducer = reducer;