import React from 'react';

import PageContainer from './PageContainer';

export default class ProjectsPage extends React.Component {
	render() {
		let projects = [{
			image: "http://placehold.it/200/200",
			name: "ManaStack",
			description: "ManaStack is a digital platform for building and testing Magic: The Gathering decks."
		}, {
			image: "/assets/images/apocalypsemod.png",
			name: "Apocalypse Mod",
			description: "Apocalypse Mod was a large-scale server side mod for Left 4 Dead. \
			Features included a new AI director system, new weapon types, lighting and map changes, and more. ",
			link: <a href="http://apocalypsemod.com"></a>
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