import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Results extends Component {

	componentDidMount() {
		
	}

	render() {
		if (!this.props.dividerError) {
			return (
				<section>
					<h2>Results</h2>
					<section id="results">
						<p>Carbs: {this.props.carb}</p>
						<p>Fat: {this.props.fat}</p>
						<p>Protein: {this.props.protein}</p>
					</section>
				</section>
			);
		} else {
			return (
				<section>
					<h2>Results</h2>
					<section id="results">
						<p>Percentages dont add up to 100. Please check your percentages!</p>
					</section>
				</section>
			);
		}
	}
}

const mapStateToProps = function (state, props) {
    return {
 		carb: state.dividerCarb,
 		fat: state.dividerFat,
 		protein: state.dividerProtein,
 		dividerError: state.dividerError
    };
};

var Container = connect(mapStateToProps)(Results);
module.exports = Container