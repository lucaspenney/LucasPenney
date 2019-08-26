import React from 'react';

import PageContainer from './PageContainer';

export default class ProjectsPage extends React.Component {
	render() {
		let projects = [{
			image: "/assets/images/manastack.png",
			name: "ManaStack",
			description: "ManaStack is a digital platform for building and testing Magic: The Gathering decks. Started in 2014 and has grown to a community of over 100,000 users.",
			link: <a href="https://manastack.com" target="_blank" rel="noopener noreferrer">View Site</a>
		}, {
			image: "/assets/images/apocalypsemod.png",
			name: "Apocalypse Mod",
			description: "Apocalypse Mod was a large-scale server side mod for Left 4 Dead. \
			Features included a new AI director system, new weapon types, lighting and map changes, and more. ",
			link: <a href="http://apocalypsemod.com" target="_blank" rel="noopener noreferrer">View Site</a>
		}, {
			image: "/assets/images/games.png",
			name: "Game Projects",
			description: "I've made multiple small web games for events such as Ludum Dare. Getting them all up and playable here is a work in progress.",
			link: <a href="#">This link goes nowhere</a>
		}];
		return <PageContainer>
			<div className="row">
				{projects.map((project, i) => {
					return <div className="col-md-6" key={i}>
						<div className="project">
							<img src={project.image}/>
							<h4>{project.name}</h4>
							<p>{project.description}</p>
							{project.link}
						</div>
					</div>;
				})}
			</div>
		</PageContainer>;
	}
}