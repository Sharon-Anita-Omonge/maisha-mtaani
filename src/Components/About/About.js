import React, { useState } from "react";
import "./About.css";
import deno from "../../assets/denoo.png";
import okoko from "../../assets/okoko.png";
import tompo from "../../assets/tompo.png";
import jeniffer from "../../assets/jeniffer.png";
import wallan from "../../assets/wallan.png";
import anita from "../../assets/anita.png";
import czar from "../../assets/czar.png";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/rightchev.png";
import schoolvisit from "../../assets/schoolvisit.jpeg";
import prisonvisit from "../../assets/prisonvisit2.jpeg";
import maishamed from "../../assets/maishamed.jpeg";
import mision from "../../assets/mision.png";
import vision from "../../assets/vision.png";
import objectives from "../../assets/objectives.png";
import email from "../../assets/email.png";
import x from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery35 from "../../assets/gallery35.jpeg";
import gallery19 from "../../assets/gallery19.jpeg";
import gallery45 from "../../assets/gallery45.jpeg";
import gallery25 from "../../assets/gallery25.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";

const images = [
	gallery1,
	prisonvisit,
	maishamed,
	gallery19,
	gallery45,
	gallery25,
	gallery35,
	gallery10,
];

const CollapsibleSection = ({ title, children, isOpen, onClick }) => {
	return (
		<div className='collapsible-section'>
			<button
				onClick={onClick}
				className={`collapsible-button ${isOpen ? "active" : ""}`}
			>
				<h5>{title}</h5>
			</button>
			{isOpen && <div className='collapsible-content'>{children}</div>}
		</div>
	);
};

const About = () => {
	const [openSection, setOpenSection] = useState("Short story about us");

	const handleToggleSection = (section) => {
		setOpenSection(openSection === section ? "" : section);
	};
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleImageClick = (index) => {
		setSelectedIndex(index);
	};

	const handleCloseModal = () => {
		setSelectedIndex(null);
	};

	const handlePrevClick = (e) => {
		e.stopPropagation();
		setSelectedIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleNextClick = (e) => {
		e.stopPropagation();
		setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className='about-page'>
			<div className='about hero'>
				<h1>About Us</h1>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<h5>About</h5>
				</div>
			</div>
			<div className='collapsable-cont container'>
				<div className='collapsable'>
					<h3>Our History</h3>
					<CollapsibleSection
						title='Short story about us'
						isOpen={openSection === "Short story about us"}
						onClick={() => handleToggleSection("Short story about us")}
					>
						<p>
							Maisha Mtaani’s inception in 2015 was a direct response to the
							urgent challenge of drug abuse in Kisumu County. Our founders,
							moved by the plight of the community and the escalating epidemic,
							envisioned an organization that could make a real difference.
						</p>
						<br />
						<p>
							The streets of Kisumu, once vibrant with the energy of its youth,
							were dimming under the shadow of substance misuse.
						</p>
					</CollapsibleSection>
					<CollapsibleSection
						title='Why we started'
						isOpen={openSection === "Why we started"}
						onClick={() => handleToggleSection("Why we started")}
					>
						<p>
							Determined to ignite a spark of change, Maisha Mtaani became the
							embodiment of that resolve. We set out to offer not just aid, but
							a path to empowerment for those caught in the web of addiction.
						</p>
						<br />
						<p>
							Our approach was rooted in compassion and the belief that every
							individual holds the potential for renewal and growth.
						</p>
					</CollapsibleSection>
					<CollapsibleSection
						title='What drives us'
						isOpen={openSection === "What drives us"}
						onClick={() => handleToggleSection("What drives us")}
					>
						<p>
							As we reflect on our history, it is the stories of transformation
							and resilience that stand as testaments to what inspired us.
						</p>
						<br />{" "}
						<p>
							It is the reclaimed lives, the restored hope, and the renewed
							opportunities that define our journey and continue to drive us
							forward.
						</p>
					</CollapsibleSection>
				</div>
				<div className='collapsable-image'>
					<div id='part1'>
						<img src={maishamed} alt='' id='image1' />
					</div>

					<div id='part2'>
						<img src={prisonvisit} alt='' id='image2' />
						<img src={schoolvisit} alt='' id='image3' />
					</div>
				</div>
			</div>
			<div className='mission-about container'>
				<div className='abt'>
					<div className='mission-header'>
						<img src={mision} alt='' />
						<h3>Our Mission</h3>
					</div>

					<p>
						Empower and uplift youth and vulnerable populations in Kisumu County
						through holistic support, positive change, and opportunities for
						growth.
					</p>
				</div>
				<div className='abt'>
					<div className='mission-header'>
						<img src={vision} alt='' />
						<h3>Our Vision</h3>
					</div>

					<p>
						Create a community where everyone has access to healthcare,
						education, and employment, while eradicating drug abuse and
						fostering a vibrant, hopeful society.
					</p>
				</div>
				<div className='abt'>
					<div className='mission-header'>
						<img src={objectives} alt='' />
						<h3>Core Values</h3>
					</div>
					<ul>
						<li>Empowerment</li>
						<li>Inclusivity</li>
						<li>Sustainability</li>
						<li>Transparency & accountability</li>
					</ul>
				</div>
			</div>
			<div className='team container'>
				<div className='meet'>
					<h4>Meet The Team</h4>
					<h3>
						Awesome guys behind our <br /> organization success
					</h3>
				</div>
				<div className='team-list'>
					<section className='team-member'>
						<img src={tompo} alt='community' />
						<div className='title'>
							<h4>Tom Eric</h4>
							<p>Founder & CEO</p>
							<div className='about-socials'>
								<img src={x} alt='' />
								<img src={linkedin} alt='' />
								<img src={email} alt='' />
							</div>
						</div>
					</section>
					<section className='team-member'>
						<img src={deno} alt='community' />
						<div className='title'>
							<h4>Denis Otieno</h4>
							<p>Executive Director</p>
						</div>
						<div className='about-socials'>
							<img src={x} alt='' />
							<img src={linkedin} alt='' />
							<img src={email} alt='' />
						</div>
					</section>

					<section className='team-member'>
						<img src={okoko} alt='community' />
						<div className='title'>
							<h4>Brian Okoko</h4>
							<p>Administrative Manager</p>
						</div>
						<div className='about-socials'>
							<img src={x} alt='' />
							<img src={linkedin} alt='' />
							<img src={email} alt='' />
						</div>
					</section>

					<section className='team-member'>
						<img src={jeniffer} alt='community' />
						<div className='title'>
							<h4>Jenipher Alosi</h4>
							<p>Communication Manager</p>
						</div>
						<div className='about-socials'>
							<img src={x} alt='' />
							<img src={linkedin} alt='' />
							<img src={email} alt='' />
						</div>
					</section>
					<section className='team-member'>
						<img src={deno} alt='community' />
						<div className='title'>
							<h4>David Ochanji</h4>
							<p>Programme Manager</p>
							<div className='about-socials'>
								<img src={x} alt='' />
								<img src={linkedin} alt='' />
								<img src={email} alt='' />
							</div>
						</div>
					</section>
					<section className='team-member'>
						<img src={wallan} alt='community' />
						<div className='title'>
							<h4>Eric Okech</h4>
							<p>Patron</p>
							<div className='about-socials'>
								<img src={x} alt='' />
								<img src={linkedin} alt='' />
								<img src={email} alt='' />
							</div>
						</div>
					</section>
					<section className='team-member'>
						<img src={anita} alt='community' />
						<div className='title'>
							<h4>Anita Omonge</h4>
							<p>Volunteer</p>
						</div>
					</section>
					<section className='team-member'>
						<img src={czar} alt='community' />
						<div className='title'>
							<h4>John Ceazar Onyango</h4>
							<p>Volunteer</p>
						</div>
					</section>
					<section className='team-member'>
						<img src={anita} alt='community' />
						<div className='title'>
							<h4>Female Volunteer</h4>
							<p>Volunteer</p>
						</div>
					</section>
					<section className='team-member'>
						<img src={anita} alt='community' />
						<div className='title'>
							<h4>Female Volunteer</h4>
							<p>Volunteer</p>
						</div>
					</section>
				</div>
			</div>
			<div>
				<div
					className='container'
					style={{ marginBottom: "5%", textAlign: "center" }}
				>
					<h3>Photo Gallery</h3>
					<p>
						Here are some of our photos. View full Gallery{" "}
						<Link to='/gallery'>
							<span style={{ color: "var(--purple" }}>Here</span>
						</Link>
					</p>
				</div>
				<div className='gallery'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Gallery ${index}`}
							onClick={() => handleImageClick(index)}
							className='gallery-about'
						/>
					))}
				</div>
				{selectedIndex !== null && (
					<div className='modal' onClick={handleCloseModal}>
						<span className='close' onClick={handleCloseModal}>
							&times;
						</span>
						<img
							className='modal-content'
							src={images[selectedIndex]}
							alt='Selected'
						/>
						<button className='prev' onClick={handlePrevClick}>
							&#10094;
						</button>
						<button className='next' onClick={handleNextClick}>
							&#10095;
						</button>
					</div>
				)}
				);
			</div>
		</div>
	);
};

export default About;
