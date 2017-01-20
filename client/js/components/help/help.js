import React, {Component} from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

class Help extends Component {

	componentDidMount() {
		
	}

	render() {
		//list temp: <li><b><u></u></b></li><br />
		const tabsStyles = {
			backgroundColor: '#FFFFFF'
		}
		const tabStyles = {
			backgroundColor: '#0288D1'
		}
		const inkBarStyles = {
			backgroundColor: '#FFC107'
		}
		return (
			<section >
				<section className="help-container">
					<h1 className="title" id="helpTitle">What is <a href="/" className="title">MacroCalculator</a></h1>
					
					<h3 id="summary">MacroCalculator is a tool that provides estimates on your total daily energy 
						expenditure and breaksdown your daily macronutrients.
					</h3>

					<Tabs inkBarStyle={inkBarStyles} style={tabsStyles}>
					    <Tab label="How MacroCalculator Works" style={tabStyles}>
					    	<ListItem>
				    			Initially, MacroCalculator calculates your BMR (
				    			<a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate#BMR_estimation_formulas" 
				    			target="_blank">Basal Metabolic Rate</a>) using your gender, age, weight, and height.
					    	</ListItem>

				    		<Divider />

				    		<ListItem>
				    			MacroCalculator then uses your BMR and daily activity level to calculate 
				    			your TDEE using the <a href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation" 
				    			target="_blank">Harris-Benedict Equation</a>.
				    		</ListItem>

				    		<Divider />

				    		<ListItem>
				    			After calculating your TDEE, we ask for your goals (lose fat, maintain weight, 
				    			or gain muscle) and cut a percentage of calories from your TDEE based on your goals.
				    		</ListItem>

				    		<Divider />

				    		<ListItem>
				    			We then ask you for how you want to divide up your macros and calculate your macros based off those percentages. 
				    			Here are some baseline ratios.
				    			<ListItem>Gaining muscle: 40-60% Carb, 15-25% Fat, and 25-35% Protein.</ListItem>
				    			<ListItem>Maintenance: 30-50% Carb, 25-35% Fat, and 25-35% Protein</ListItem>
				    			<ListItem>Losing fat: 10-30% Carb, 30-40%, 40-50% Protein</ListItem>
				    		</ListItem>

				    		<Divider />

				    		<ListItem>
				    			Now all you have to do is log your food and track your macros to reach your goals!
				    		</ListItem>
					    </Tab>

					    <Tab label="Definitions & References" style={tabStyles}> 
					    	<List>
					    		<ListItem primaryText="BMR (Basal Metabolic Rate): is the minimal rate of energy expenditure per unit time by endothermic animals at rest."/>
					    		<Divider />
					    		<ListItem primaryText="TDEE (Total Daily Energy Expenditure): is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier."/>
					    		<Divider />
					    		<ListItem primaryText="Macros: is short for macronutrients and are comprised of protein, fat, and carbohydrate."/>
					    		<Divider />
					    	</List>
					    </Tab>
					</Tabs>
				</section>
				<p className="disclaimer"><strong><u>Disclaimer:</u></strong> The calculator CANNOT account for your metabolic health and as a result, If you have been dieting for any length of time, the results it gives you might need to be adjusted to fit your personal needs. The Content on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.</p>
			</section>
		);
	}
}

export default Help;