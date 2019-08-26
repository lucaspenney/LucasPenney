import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
	constructor(params) {
		super(params);
		this.state = {
			currentPath: window.location.pathname,
		};
		params.history.listen((location, action) => {
			this.setState({
				currentPath: location.pathname,
			});
		});
	}
	render() {
		let links = [{
			href: "/about",
			label: "About",
			icon: <i className="nav-icon far fa-user"></i>
		}, {
			href: "/projects",
			label: "Projects",
			icon: <i className="nav-icon fas fa-code-branch"></i>
		}, {
			href: "/links",
			label: "Links",
			icon: <i className="nav-icon fas fa-link"></i>
		}];
		return <div className="navigation container">
			{links.map((link, i) => {
				return <Link key={i} className={"navigation-item " + ((link.href == this.state.currentPath) ? "active" : "")} to={link.href}>
					{link.icon} {link.label}
				</Link>;
			})}
		</div>;
	}
}

export default withRouter(Nav);


