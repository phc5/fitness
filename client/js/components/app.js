import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default React.createClass({
	render() {
		return (
			<div>
				<MuiThemeProvider>
					{this.props.children}
				</MuiThemeProvider>
			</div>
		);
	}
});