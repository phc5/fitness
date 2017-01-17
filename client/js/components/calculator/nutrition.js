import React, {Component} from "react";
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class Nutrition extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();
		this.props.dispatch(actions.calculateBodyType(event.target.bodyType.value));
	}

	render() {
		return (
			<section id="nutrition-section">
				<h2 className="marg-bottom">Body Type</h2>
				<section id="goals">
					<img className="bodyTypeImg" src="../../../assets/bodyType.png"></img>
					<form onSubmit={this._submit.bind(this)} className="flex-between">
						<section>
							<input type="radio" name="bodyType" value="ectomorph"/>Ectomorph<br/>
						</section>

						<section>
							<input type="radio" name="bodyType" value="mesomorph"/>Mesomorph<br/>
						</section>

						<section>
							<input type="radio" name="bodyType" value="endomorph"/>Endomorph<br/>
						</section>

						<input className="submit" type="submit" value="Calculate Your Macros!"/>
					</form>
				</section>
			</section>
		);
	}
}

const mapStateToProps = function (state, props) {
    return {

    };
};

var Container = connect(mapStateToProps)(Nutrition);
module.exports = Container