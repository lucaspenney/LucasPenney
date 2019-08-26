import React from 'react';

import PageContainer from './PageContainer';

export default class AboutPage extends React.Component {
	render() {
		return <PageContainer>
			<div className="row">
				<div className="col-md-8">
					<p>You found my personal website! Lucky you.</p>
					<p>{"I'm a self taught software developer working on web development, machine learning, and game engine technologies. "}</p>
					<br/>
					<p>Currently writing code at my company <a href="https://lucleus.com/" target="_blank" rel="noopener noreferrer">Lucleus Software</a>.</p>
				</div>
				<div className="col-md-4" align="center">
					<img src="/img/profile3.png"/>
					<p>Lucas Penney
						<br/><span className="smalltext translucent">({"Artist's Rendering"})</span>
					</p>
				</div>
			</div>
		</PageContainer>;
	}
}