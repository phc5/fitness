// import fetch from 'isomorphic-fetch'

const CALCULATE_BMR = 'CALCULATE_BMR';
const calculateBMR = (gender, age, feet, inches, weight, fat) => {
	return {
		type: CALCULATE_BMR,
		gender: gender,
		age: age,
		feet: feet,
		inches: inches,
		weight: weight,
		fat: fat
	};
};

const CALCULATE_TDEE = 'CALCULATE_TDEE';
const calculateTDEE = (activity) => {
	return {
		type: CALCULATE_TDEE,
		activity: activity
	};
};

const CALCULATE_GOALS = 'CALCULATE_GOALS';
const calculateGoals = (goal) => {
	return {
		type: CALCULATE_GOALS,
		goal: goal
	};
};


exports.CALCULATE_BMR = CALCULATE_BMR;
exports.calculateBMR = calculateBMR;

exports.CALCULATE_TDEE = CALCULATE_TDEE;
exports.calculateTDEE = calculateTDEE;

exports.CALCULATE_GOALS = CALCULATE_GOALS;
exports.calculateGoals = calculateGoals;