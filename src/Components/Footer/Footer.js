import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import x from "../../assets/btwitter.png";
import linkedin from "../../assets/blinkedin.png";
import facebook from "../../assets/bfacebook.png";
import map from "../../assets/bmaps.png";
import email from "../../assets/bemail.png";
import phone from "../../assets/bphone.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className='main-footer container'>
			<div className='footer'>
				<div className='ft-about'>
					<h4>About Us</h4>
					<p>
						Maisha Mtaani’s inception in 2015 was a direct response to the
						urgent challenge of drug abuse in Kisumu County. Our founders, moved
						by the plight of the community and the escalating epidemic,
						envisioned an organization that could make a real difference.
					</p>

					<div className='socials'>
						<ul>
							<li>
								<a
									href='https://www.facebook.com/p/Maisha-Mtaani-CBO-100087732046071/?paipv=0&eav=AfY3-leI0gwWom9DI6KtznsV1FjC-kQPrZXD8OCnPnRIEoTy_v4wvB3tXNZfBGkT_9M&_rdr'
									target='_blank'
									rel='noopener noreferrer'
								>
									{" "}
									<img src={facebook} alt='facebook icon' />
								</a>
							</li>
							<li>
								<a
									href='https://twitter.com/_maishamtaani?t=AhLCXB69HPH8Me6C9PvGNg&s=09'
									target='_blank'
									rel='noopener noreferrer'
								>
									{" "}
									<img src={x} alt='twitter icon' />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/maisha-mtaani-b532aa257/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={linkedin} alt='linkedin icon' />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='links'>
					<h4>Popular Links</h4>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>{" "}
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/causes'>Causes</NavLink>
						</li>
						<li>
							<NavLink to='/getinvolved'>Get Involved</NavLink>
						</li>
						<li>
							<NavLink to='/events'>Events</NavLink>
						</li>
						<li>
							<NavLink to='/blogs'>Blogs</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>
						<li>
							<NavLink to='/donate'>Donate</NavLink>
						</li>
					</ul>
				</div>

				<div className='location'>
					<h4>Have Any Questions?</h4>
					<ul>
						<li>
							<img src={map} alt='' />
							Kondele, Kisumu, Kenya
						</li>
						<li>
							<img src={phone} alt='' />
							<a href='tel:254763858515'> +254 763 858 515</a>
						</li>
						<li>
							<img src={phone} alt='' />
							<a href='tel:254702582348'> +254 702 582 348</a>
						</li>
						<li>
							<img src={email} alt='' />
							<a href='mailto:your-email@example.com'>info@maishamtaani.org</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='copyright'>
				<p>© {currentYear} Maisha Mtaani. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
