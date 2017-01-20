/*TODO: incorporate login on start button */

import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Home extends Component {

	componentDidMount() {
		
	}

	render() {
		return (
			<section className="home-container">
				<section >
					<h1 className="title">Welcome to MacroCalculator!</h1>
				</section>

				<section className="home-col3">
					<Card className="col3-section">
						<CardTitle title="First time here?" />
						<CardText>
							MacroCalculator provides estimates on your total daily energy expenditure and breaksdown your daily macronutrients.
						</CardText>
						<CardActions>
							<RaisedButton label="Get Started!" href="#/calculator" backgroundColor="#FFC107"/>
						</CardActions>
					</Card>
					<Card className="col3-section">
						<CardTitle title="Already know your TDEE?" style={{color: '#FFFFFF'}} className="test"/>
						<CardText>
							If you already know your TDEE and goals, we have another tool called MacroDivider that will help you divvy up your macros!
						</CardText>
						<CardActions>
							<RaisedButton label="Go to MacroDivider!" href="#/macrodivider" backgroundColor="#FFC107"/>
						</CardActions>
					</Card>

					<Card className="col3-section">
						<CardTitle title="Need Help?"/>
						<CardText>
							Don't know what a certain word means or what your results mean? We're here to answer your questions!
						</CardText>
						<CardActions>
							<RaisedButton label="Get Help!" href="#/help" backgroundColor="#FFC107"/>
						</CardActions>
					</Card>
				</section>
			</section>
		);
	}
}

export default Home;