import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../css/article.css";

const Article = (props) => {
	const { date, title, description, link, gitLink, coverImage } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
					<p></p>
					<p></p>
					<div className="pictureBorder" >
					<img
						src={coverImage}
						alt="coverImage"
						className="article-cover-image"
					/>
					</div>
				</div>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="homepage-article-link">
						<Link to={link}>
							Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
						<p></p>
						<Link to={gitLink}>
							Project Code{" "}
						</Link>
					  </div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
