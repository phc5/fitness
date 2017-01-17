import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Results extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section>
				<section id="goal-output">
					<h2>Your Results: </h2>
					<section id="results">
						<p>Protein: {this.props.protein}</p>
						<p>Fat: {this.props.fat}</p>
						<p>Carbohydrates: {this.props.carbs}</p>
					</section>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {
       	protein: state.protein,
       	fat: state.fat,
       	carbs: state.carbs
    };
};

var Container = connect(mapStateToProps)(Results);
module.exports = Container