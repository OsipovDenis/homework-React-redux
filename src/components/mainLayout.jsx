import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component{
	render() {

		return (
			<div className="app">
				<header>
					<ul className="nav">
						<li>
							<Link to="/">ColorPicker</Link>
						</li>
						<li>
							<Link to="/text">My Text!</Link>
						</li>
						<li>
							<Link to="/photos">Photos!</Link>
						</li>
					</ul>
				</header>
				<main>
		          {this.props.children}
		        </main>
	        </div>
		);
	}
}