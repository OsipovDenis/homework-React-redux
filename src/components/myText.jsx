import React from 'react';
import {connect} from 'react-redux';

export default class MyText extends React.Component {
	render(){
		let body = document.querySelector('body');
		body.style.background = '#ffffff';

		let { color } = this.props.color,
			headersColor = { color: color };
		
	return (
		<div className="myText">
			<h1 style={ headersColor }>Hello,</h1>
			<h3 style={ headersColor }>world!</h3>
		</div>
	  );
	}	
}

function mapStateToProps (state) {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(MyText)