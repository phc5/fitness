import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import Paper from 'material-ui/Paper';

class Results extends Component {

	componentDidMount() {
		
	}

	render() {
		const paperStyle = {
			width: '33%',
			textAlign: 'center'
		}
		if (!this.props.dividerError) {
			return (
				<section>
					<h2>Results</h2>
					<section id="results">
						<Paper rounded={false} style={paperStyle} zDepth={1}>
							<p>Carbs: {this.props.carb}</p>
						</Paper>
						<Paper rounded={false} style={paperStyle} zDepth={1}>
							<p>Fat: {this.props.fat}</p>
						</Paper>
						<Paper rounded={false} style={paperStyle} zDepth={1}>
							<p>Protein: {this.props.protein}</p>
						</Paper>
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
       	protein: state.protein,
       	fat: state.fat,
       	carb: state.carb,
       	dividerError: state.dividerError
    };
};

var Container = connect(mapStateToProps)(Results);
module.exports = Container