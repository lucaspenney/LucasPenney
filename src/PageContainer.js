import React from 'react';

import Footer from './Footer';

export default class PageContainer extends React.Component {
	render() {
		return <div className="page-container">
			<div className="page-container-content">
				{this.props.children}
			</div>
		</div>;
	}
}