import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import phone from "../../assets/phone.png";
import x from "../../assets/twitter.png";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";

const Navbar = () => {
	const [scrollStyle, setScrollStyle] = useState({
		background: "transparent",
		padding: "4% 10%",
	});

	const handleScroll = () => {
		console.log(window.scrollY);
		if (window.scrollY > 0) {
			setScrollStyle({ background: "var(--purple)", padding: "1% 10%" });
		} else {
			setScrollStyle({ background: "transparent", padding: "4% 10%" });
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = "tel:+254710466533";
	};

	const handleEmailClick = (event) => {
		event.preventDefault();
		window.location.href = "mailto:info@ocheanbays.com";
	};

	return (
		<div className='navbar'>
			<div className='top-nav container'>
				<div className='top-nav-right'>
					<ul>
						<li>
							<img src={phone} alt='phone icon' />
							<a href='tel:254702582348' onClick={handlePhoneClick}>
								+254 702 582 348
							</a>
						</li>
						<li>
							<img src={phone} alt='phone icon' />
							<a href='tel:254763858515' onClick={handlePhoneClick}>
								+254 763 858 515
							</a>
						</li>
						<li>
							<img src={email} alt='email icon' />
							<a href='mailto:info@maishamtaani.org' onClick={handleEmailClick}>
								info@maishamtaani.org
							</a>
						</li>
					</ul>
				</div>
				<div className='top-nav-left'>
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
			<div>
				<nav className='nav' style={scrollStyle}>
					<div>
						<img className='logo' src={logo} alt='logo' />
					</div>
					<div>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/about'>About</NavLink>
						<NavLink to='/causes'>Causes</NavLink>
						<NavLink to='/events'>Events</NavLink>
						<NavLink to='/pages'>Pages</NavLink>
						<NavLink to='/blogs'>Blogs</NavLink>
						<NavLink to='/contactus'>Contact</NavLink>
						<NavLink to='/donate'>
							<button className='btn'>Donate</button>
						</NavLink>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
