import React from 'react';

export default class Photo extends React.Component{
	render() {
		return (
			<div className='photo'>
				<img src = { this.props.src } />
			</div>
		);
	}
}