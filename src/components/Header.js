import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {

	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>
                            <p>About</p>
						</Link>
					</li>
					<li>
						<Link to={"/profiles"}>
							<p>Profiles</p>
						</Link>
					</li>
					<li>
						<Link to={"/locations"}>
							<p>Locations</p>
						</Link>
					</li>
					<li>
						<Link to={"/contact"}>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default header;