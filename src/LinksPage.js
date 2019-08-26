import React from 'react';

import PageContainer from './PageContainer';

export default class LinksPage extends React.Component {
	render() {
		let links = [{
			icon: <i className="fa-fw fab fa-twitter"></i>,
			label: "Twitter",
			href: "https://twitter.com/lucaspenney",
		}, {
			icon: <i className="fa-fw fab fa-linkedin"></i>,
			label: "LinkedIn",
			href: "http://lnkd.in/ZStV-k",
		}, {
			icon: <i className="fa-fw fab fa-github"></i>,
			label: "GitHub",
			href: "https://github.com/lucaspenney",
		}, {
			icon: <i className="fa-fw fab fa-steam"></i>,
			label: "Steam",
			href: "http://steamcommunity.com/id/Luke-P",
		}, {
			icon: <i className="fa-fw fas fa-envelope"></i>,
			label: "Email",
			href: "mailto: lucas" + "" + "penney" + "@gmail.com",
		}];
		return <PageContainer>
			<p align="center">{"Here's all the other places on the internet you can find me. Apparently one website isn't enough."}</p>
			<div className="links-container">
				{(links.map((link, i) => {
					return <div key={i} className="link">
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							{link.icon}
							{" "}
							{link.label}
						</a>
					</div>;
				}))}
			</div>
		</PageContainer>;
	}
}