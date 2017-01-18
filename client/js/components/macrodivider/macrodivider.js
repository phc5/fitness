import React, {Component} from "react";
import BasicInfo from './basic-info';
import Results from './results';

class MacroDivider extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();

	}

	render() {
		return (
			<section className="calculator-container">
				<a href="/" className="title"><h1 style={{fontSize: 70 + 'px'}}>MacroDivider</h1></a>
				<h2>Basic Information</h2>
				<BasicInfo />
				<hr/>
				<Results />
			</section>
		);
	}
}

export default MacroDivider;