// import fetch from 'isomorphic-fetch'

const CALCULATE_BMR = 'CALCULATE_BMR';
const calculateBMR = (gender, age, feet, inches, weight) => {
	return {
		type: CALCULATE_BMR,
		gender: gender,
		age: age,
		feet: feet,
		inches: inches,
		weight: weight
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

const CALCULATE_MACROS = 'CALCULATE_MACROS';
const calculateMacros = (carb, fat, protein) => {
	return {
		type: CALCULATE_MACROS,
		carb: carb,
		fat: fat,
		protein: protein
	}
}

const CALCULATE_DAILY_MACROS = 'CALCULATE_DAILY_MACROS';
const calculateDailyMacros = (tdee, carb, fat, protein) => {
	return {
		type: CALCULATE_DAILY_MACROS,
		tdee: tdee,
		carb: carb,
		fat: fat,
		protein: protein
	}
}


exports.CALCULATE_BMR = CALCULATE_BMR;
exports.calculateBMR = calculateBMR;

exports.CALCULATE_TDEE = CALCULATE_TDEE;
exports.calculateTDEE = calculateTDEE;

exports.CALCULATE_GOALS = CALCULATE_GOALS;
exports.calculateGoals = calculateGoals;

exports.CALCULATE_DAILY_MACROS = CALCULATE_DAILY_MACROS;
exports.calculateDailyMacros = calculateDailyMacros;

exports.CALCULATE_MACROS = CALCULATE_MACROS;
exports.calculateMacros = calculateMacros;