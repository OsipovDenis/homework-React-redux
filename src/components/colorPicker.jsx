import React from 'react';
import { SketchPicker  } from 'react-color';
import { connect } from 'react-redux';
import colorClassifier from './color_classifier';

class ColorPicker extends React.Component {
	render(){
		let { color, colorName} = this.props.color,
			{ onChangeColor } = this.props;
		this.color = color;
		this.onChangeColor = onChangeColor;

		let body = document.querySelector('body');
		body.style.background = color;

		return (
				<div className="colorPickerWrap">
					<h3>ColorPicker</h3>
					<div className="colorPicker">
						<SketchPicker  color = { this.color } onChange = { this.onChangeHelper.bind( this ) }/>
					</div>
				</div>
		);
	}

	onChangeHelper(color) {
		let body = document.querySelector('body'),
			colorName = colorClassifier.classify(color.hex);
		body.style.background = color.hex;

		this.onChangeColor(color.hex, colorName);
	}
}

// Action
const setColor = function(color, colorName) {
	return {
		type:'SET_COLOR',
		color: color,
		colorName: colorName
	}
};

function mapStateToProps(store){
    return {
        color: store.color,
        colorName: store.colorName
    };
}

function mapDispatchToProps(dispatch){
	return {
		onChangeColor: (color, colorName) => {
			dispatch( setColor(color, colorName) );
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
