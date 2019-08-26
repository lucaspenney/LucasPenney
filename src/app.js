import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Nav from './Nav';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import LinksPage from './LinksPage';

class App extends React.Component {
	constructor(params) {
		super(params);
	}
	render() {
		return <div>
			<BrowserRouter>
				<Nav/>
				<div className="container relative">
					<div className="page-transition-animation">
						<Route render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									classNames={"view-animate"}
									timeout={{enter: 500, exit: 300}}>
									<Switch location={location}>
										<Route path="/about" component={AboutPage}/>
										<Route path="/projects" component={ProjectsPage}/>
										<Route path="/links" component={LinksPage}/>
										<Redirect from="/" to="/about" />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}/>
					</div>
				</div>
			</BrowserRouter>
		</div>;
	}
}

ReactDOM.render(<App/> , document.getElementById("react-app"));