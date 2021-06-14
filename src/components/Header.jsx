import React from "react";
import LinkedInIcon from '../assets/ico/linkedin.svg'
import InstagramIcon from '../assets/ico/instagram.svg'
import TwitterIcon from '../assets/ico/twitter.svg'

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
						<div className="hero-badge">Fullstack Web Dev</div>
						<div className="hero-badge">Frontend Mobile Dev</div>
						<div className="hero-badge">YouTuber</div>
						<div className="hero-badge">ReactJS</div>
						<div className="hero-badge">NodeJS</div>
						<div className="hero-badge">React Native</div>
						<div className="hero-badge">Firebase 🔥</div>
						<div className="hero-badge">CI/CD</div>
						<div className="hero-badge">Heroku</div>
					</div>

					<div className="flex hero-social-media">
						<div className="hero-sm hero-ln">
							<img src={LinkedInIcon} alt="LinkedIn calebcadainoo" />
						</div>

						<div className="hero-sm hero-in">
							<img src={InstagramIcon} alt="Instagram calebcadainoo" />
						</div>

						<div className="hero-sm hero-tw">
							<img src={TwitterIcon} alt="Twitter calebcadainoo" />
						</div>

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
