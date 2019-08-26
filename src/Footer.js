import React from 'react';

export default class Footer extends React.Component {
	getYear() {
		let date = new Date();
		return date.getFullYear();
	}
	render() {
		return <div className="footer">
			Copyright &copy; {this.getYear()} Lucas Penney - All Rights Reserved
		</div>;
	}
}