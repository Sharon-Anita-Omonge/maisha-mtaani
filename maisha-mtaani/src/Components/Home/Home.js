import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import prison from "../../assets/Prisonfootball4.jpeg";
import empowerment from "../../assets/empowerment.png";
import community from "../../assets/community.png";
import support from "../../assets/support.png";
import sports from "../../assets/under16football2.jpeg";
import workshop from "../../assets/Prisonfootball2.jpeg";
import awareness from "../../assets/hero4.png";
import calender from "../../assets/calendar.png";
import pic from "../../assets/Prisonfootball7.jpeg";
import location from "../../assets/bmaps.png";
import children from "../../assets/children.jpg";
import primary from "../../assets/primary.jpeg";
import under16 from "../../assets/under16football4.jpeg";
import maishamed from "../../assets/maishamed.png";
import NACADA from "../../assets/NACADA.png";
import kisumucounty from "../../assets/kisumu-county.jpeg";
import CountUpAnimation from "../CountUp/CountUp";
import TestimonialPage from "../Testimonials/Testimonials";

const Home = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className='home' style={{ overflowX: "hidden" }}>
			<div className='hero1 container'>
				<div className='hero-text1'>
					<h1>Maisha Mtaani, Changing Lives</h1>
					<p>
						Welcome to Maisha Mtaani, a youth-led initiative dedicated to
						empowering and uplifting young people and vulnerable individuals in
						Kisumu.
					</p>
					<div>
						<Link to='/donate'>
							{" "}
							<button className='btn'>
								<span>Donate Funds</span>
							</button>
						</Link>
						<Link to='/about'>
							<button className='btn'>Learn More</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='header'>
				<h3>What We Do</h3>
			</div>
			<div className='activities container'>
				<div className='mini-activties flex-items'>
					<img src={support} alt='' />
					<div>
						<h4>Support and Recovery</h4>
						<p>
							Maisha Mtaani provides a safe haven for individuals battling drug
							abuse, offering structured support programs that guide them
							towards recovery and sobriety.
						</p>
					</div>
				</div>
				<div className='mini-activties flex-items'>
					<img src={empowerment} alt='' />
					<div>
						<h4>Empowerment Through Opportunity</h4>
						<p>
							We create opportunities for personal development, equipping our
							beneficiaries with the skills and resources needed to build a
							self-sustained future.
						</p>
					</div>
				</div>
				<div className='mini-activties flex-items'>
					<img src={community} alt='' />
					<div>
						<h4>Community Engagement</h4>
						<p>
							Our organization actively engages with the community, fostering a
							supportive network that encourages collective action against
							substance abuse.
						</p>
					</div>
				</div>
			</div>

			<div className='home-about container'>
				<div className='home-about-left'>
					<img src={prison} alt='' />
				</div>
				<div className='home-about-right'>
					<h4>Learn About Us</h4>
					<h3>Our Story: Igniting Hope for Kisumu County</h3>
					<p>
						Maisha Mtaani’s inception in 2015 was a direct response to the
						urgent challenge of drug abuse in Kisumu County. Our founders, moved
						by the plight of the community and the escalating epidemic,
						envisioned an organization that could make a real difference. The
						streets of Kisumu, once vibrant with the energy of its youth, were
						dimming under the shadow of substance misuse...
					</p>
					<Link to='/about'>
						<button className='btn'>Learn More</button>
					</Link>
				</div>
			</div>
			<div className='home-event container'>
				<div className='home-event-left'>
					<h4>UPCOMING EVENTS</h4>
					<div className='home-event-details'>
						<div>
							<img src={pic} alt='' id='image' />
						</div>
						<div id='details-right'>
							<h5>Prison Football</h5>
							<div className='time-location'>
								<div>
									<img src={calender} alt='' />
									<p> March 23, {currentYear} </p>
								</div>
								<div>
									<img src={location} alt='' />
									<p>Kodiaga Prison</p>
								</div>
							</div>
							<p>
								Maisha Mtaani hosts an uplifting event at Kodiaga Prison,
								engaging inmates in football and meaningful conversations about
								mental health, highlighting the interplay between mental
								well-being and the journey to overcoming drug abuse. This annual
								gathering fosters hope and solidarity within the prison walls.
							</p>
							<Link to='/events'>
								<span style={{ color: "var(--purple)", fontWeight: "700" }}>
									Read More...
								</span>
							</Link>
						</div>
					</div>
					<div className='home-event-details'>
						<div>
							<img src={under16} alt='' id='image' />
						</div>
						<div id='details-right'>
							<h5>Under 16 Football Tournaments</h5>
							<div className='time-location'>
								<div>
									<img src={calender} alt='' />
									<p>August 23, {currentYear} </p>
								</div>
								<div>
									<img src={location} alt='' />
									<p>Kondele, Kisumu</p>
								</div>
							</div>
							<p>
								Maisha Mtaani proudly presents the Under 16 Awareness Campaign
								Football Tournaments, a vibrant platform where the energy of
								sport meets the power of education. Through the universal
								language of football, we engage the youth in Kisumu County,
								fostering awareness about drug abuse and mental health. This
								event not only promotes physical fitness but also champions the
								cause of mental well-being, encouraging young minds to lead
								healthier, substance-free lives. It's a celebration of
								potential, teamwork, and the spirited resolve to make positive
								life choices.
							</p>
							<Link to='/events'>
								<span style={{ color: "var(--purple)", fontWeight: "700" }}>
									Read More...
								</span>
							</Link>
						</div>
					</div>
					<div className='home-event-details'>
						<div>
							<img
								src={children}
								alt=''
								id='image'
								className='image-last'
							></img>{" "}
						</div>
						<div id='details-right'>
							<h5>Annual Orphanage Visit</h5>
							<div className='time-location'>
								<div>
									<img src={calender} alt='' />
									<p> December, {currentYear} </p>
								</div>
								<div>
									<img src={location} alt='' />
									<p>Kisumu, Kenya</p>
								</div>
							</div>

							<p>
								Maisha Mtaani’s annual orphanage visit embodies our commitment
								to nurturing the community. Each year, we select an orphanage to
								shower with love and support, providing essentials and fostering
								joy. This cherished tradition reflects our dedication to giving
								back and enriching the lives of children in need.
							</p>
							<Link
								to='/events'
								style={{
									color: "var(--purple)",
									fontWeight: "700",
								}}
							>
								<span>Read More...</span>
							</Link>
						</div>
					</div>
				</div>
				<div className='home-event-right'>
					<h4>FEATURED CAUSES</h4>
					<div>
						<div className='image'>
							<img src={primary} alt='' />
						</div>
						<div className='details-causes-home'>
							<h4>Primary School Awareness Campaign</h4>
							<p>
								Maisha Mtaani's Primary School Awareness Campaign is a
								cornerstone of our community outreach in Kisumu County.
								Conducted monthly, this initiative brings the crucial
								conversation about substance abuse to the forefront of young
								minds. Through interactive sessions and engaging activities, we
								educate students on the dangers of drug use, equipping them with
								knowledge and strategies to make informed decisions. Our goal is
								to foster a generation that is not only aware but also resilient
								against the temptations of substance misuse.
							</p>
							<Link to='/causes'>
								<span>Read More</span>
							</Link>
							<Link to='/donate'>
								<button className='btn'>Donate Funds</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='home-causes container'>
				<h4>Popular Causes</h4>
				<h3>Here are some of our popular causes</h3>
				<div className='mini-causes'>
					<div>
						<img src={sports} alt='' />
						<h5>Youth Sports</h5>
						<p>
							Our youth-focused programs include soccer tournaments, cultural
							events, and arts workshops, providing a platform for talent
							development, teamwork, and positive recreational activities.
						</p>

						<Link to='/donate'>
							<button className='butn'>Donate</button>
						</Link>
					</div>
					<div>
						<img src={awareness} alt='' />
						<h5>Awareness Campaign</h5>
						<p>
							Our campaigns address critical issues like drug abuse, crime
							prevention, and health awareness. We engage the community through
							workshops, seminars, and events, fostering informed
							decision-making and behavior change
						</p>

						<Link to='/donate'>
							<button className='butn'>Donate</button>
						</Link>
					</div>
					<div>
						<img src={workshop} alt='' />
						<h5>Prison Football Program</h5>
						<p>
							Our flagship program focuses on rehabilitating individuals
							struggling with drug addiction. Through counseling, vocational
							training, and employment opportunities, we empower them to rebuild
							their lives and contribute positively to society
						</p>

						<Link to='/donate'>
							<button className='butn'>Donate</button>
						</Link>
					</div>
				</div>
			</div>
			<CountUpAnimation />
			<TestimonialPage />
			<div className='partners container'>
				<h3>Become Support Partner</h3>
				<div className='part'>
					<p>Partner with us for community transformation</p>
					<Link to='/contact'>
						<button className='btn'>Get In Touch</button>
					</Link>
				</div>
				<div>
					<img src={NACADA} alt='' />
					<img src={kisumucounty} alt='' />
					<img src={maishamed} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Home;
