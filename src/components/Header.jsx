import React from "react";

function Header() {
	return <header className="hero-header">
		<aside className="hero-overlay">
			<section className="centroid grid hero-inner">
				{/* left */}
				<aside className="hero-division hero-left">
					<h1 className="hero-name">
						Caleb Crosby Adainoo
					</h1>

					<div className="flex hero-title-badges">
						<div className="hero-badge">ReactJS</div>
						<div className="hero-badge">YouTuber</div>
						<div className="hero-badge">Fullstack Web Dev</div>
						<div className="hero-badge">NodeJS</div>
						<div className="hero-badge">Firebase 🔥</div>
						<div className="hero-badge">CI/CD</div>
						<div className="hero-badge">YouTuber</div>
						<div className="hero-badge">YouTuber</div>
					</div>

					<div className="hero-social-media">
						social media stuff
					</div>
				</aside>
				
				{/* right */}
				<aside className="hero-division hero-right">
					{/* image here */}
				</aside>
			</section>
		</aside>
	</header>;
}

export default Header;
