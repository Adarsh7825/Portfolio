import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../data/profile";

import "../../css/socials.css";

const Socials = () => {
	return (
		<div className="socials">

			<div className="social">
				<a href={INFO.socials.github} target="_blank">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>


			<div className="email">
				<div className="email-wrapper">
					<a
						href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${INFO.primary.email}`}
						target="_blank"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.primary.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;