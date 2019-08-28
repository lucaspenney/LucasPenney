import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
	constructor(params) {
		super(params);
		this.state = {
			top:0,
		};
		setTimeout(() => {
			this.fix();
		});
		params.history.listen((location, action) => {
			setTimeout(() => {
				this.fix();
			}, 300);
		});
	}
	fix() {
		let minHeight = (document.documentElement.clientHeight * 0.8) - 200;
		let timer = setInterval(() => {
			let el = document.getElementsByClassName("page-container")[0];
			let height = el.getBoundingClientRect().height;
			if (height < minHeight) height = minHeight;
			this.setState({
				top: height
			});
		}, 128);
		setTimeout(() => {
			clearTimeout(timer);
		}, 1500);
	}
	getYear() {
		let date = new Date();
		return date.getFullYear();
	}
	render() {
		return <div className="footer" style={{marginTop: this.state.top}}>
			Copyright &copy; {this.getYear()} Lucas Penney - All Rights Reserved
		</div>;
	}
}

export default withRouter(Footer);