import React from "react";

function comingsoon() {
	return {
		codeLink: '',
		coverImage: "https://cdn-icons-png.flaticon.com/128/3967/3967195.png",
		date: "February 2024",
		title: "Coming Soon...",
		description:
			"More articles coming soon!",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			
			.randimage {
				width: 50%;
				align-self: center;
			}
			`,
			keywords: [
			],
			body: (
				<React.Fragment>
				<div className="article-content">
					<div className="paragraph"><p></p></div>
					<h1>Coming Soon...</h1>
					<img
							src="https://cdn-icons-png.flaticon.com/128/3967/3967195.png"
							alt="group"
							className="randImage"
						/>
				</div>
				</React.Fragment>
			),
		};
}

{/*function mediaserver() {
	return {
		codeLink: '',
		coverImage: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
		date: "February 2024",
		title: "Dockerized Home Media Server",
		description:
			"Setting up a media server using Jellyfin, Sonarr, Radarr in Docker.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}


			.randImage {
				width: 50%;
				align-self: center;
			}
			`,
		keywords: [
		],
		body: (
			<React.Fragment>
			<div className="article-content">
				<div className="paragraph"><p></p></div>
				<img
						src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
						alt="random"
						className="randImage"
					/>
					<p>Hello!</p>
					<h1>Hello!</h1>
				<img
						src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
						alt="group"
						className="randImage"
					/>
			</div>
			</React.Fragment>
		),
	};
}

function mediaserver2() {
	return {
		codeLink: '',
		coverImage: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
		date: "February 2024",
		title: "Dockerized Home Media Server",
		description:
			"Setting up a media server using Jellyfin, Sonarr, Radarr in Docker.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}


			.randImage {
				width: 50%;
				align-self: center;
			}
			`,
		keywords: [
		],
		body: (
			<React.Fragment>
			<div className="article-content">
				<div className="paragraph"><p></p></div>
				<img
						src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
						alt="random"
						className="randImage"
					/>
					<p>Hello!</p>
					<h1>Hello!</h1>
				<img
						src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
						alt="group"
						className="randImage"
					/>
			</div>
			</React.Fragment>
		),
	}; 
} */}
	
const myArticles = [comingsoon];

export default myArticles;
