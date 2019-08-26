import React from 'react';

import PageContainer from './PageContainer';

export default class LinksPage extends React.Component {
	render() {
		let links = [{
			icon: <i className="fab fa-linkedin"></i>,
			label: "LinkedIn",
			href: "http://lnkd.in/ZStV-k",
		}, {
			icon: <i className="fab fa-linkedin"></i>,
			label: "LinkedIn",
			href: "http://lnkd.in/ZStV-k",
		}];
		return <PageContainer>
			{(links.map((link, i) => {
				return <div key={i}>
					{link.icon}
					{" "}
					<a href={link.href}>{link.label}</a>
				</div>;
			}))}
		</PageContainer>;
	}
}