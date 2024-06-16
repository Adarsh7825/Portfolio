import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

import INFO from "../data/profile";
import SEO from "../data/seo";
import Article from "../components/article";
import myArticles from "../data/articles";

import "../../css/articles.css";

const Articles = () => {

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.primary.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-main-container">
						<div className="title articles-title">
              {INFO.articles.title}
						</div>
            <div className="subtitle articles-subtitle">
              {INFO.articles.description}
						</div>
						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
											gitLink={article().codeLink}
											coverImage = {article().coverImage}
										/>
									</div> 
								))} 
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
