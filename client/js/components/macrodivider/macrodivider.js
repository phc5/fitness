import React, {Component} from "react";
import BasicInfo from './basic-info';
import Results from './results';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class MacroDivider extends Component {

	componentDidMount() {
		
	}

	_submit(event) {
		event.preventDefault();

	}

	render() {
		const paperStyle = {
			padding: 10
		}
		return (
			<section className="calculator-container">
				<a href="/" className="title"><h1 style={{fontSize: 70 + 'px'}}>MacroDivider</h1></a>
				<Paper rounded="false" style={paperStyle} zDepth={4}>
					<BasicInfo />
					<Divider />
					<Results />
				</Paper>	
			</section>
		);
	}
}

export default MacroDivider;