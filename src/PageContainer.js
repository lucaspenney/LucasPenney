import React from 'react';

export default class Nav extends React.Component {
	render() {
		return <div className="page-container">
			{this.props.children}
		</div>;
	}
}