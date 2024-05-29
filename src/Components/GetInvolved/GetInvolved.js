import React from "react";
import "./GetInvolved.css";
import { Link } from "react-router-dom";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import volunteer from "../../assets/volunteer.jpg";
import under16football3 from "../../assets/under16football3.jpeg";
import donate from "../../assets/donate.jpg";
import engageonline from "../../assets/engageonline.jpg";
import collaborate from "../../assets/collaborate.jpg";
import Prisonfootball5 from "../../assets/Prisonfootball5.jpeg";
import spreadtheword from "../../assets/spreadtheword.jpeg";

const GetInvolved = () => {
	return (
		<div className='container'>
			<div className='get-involved'>
				<h1>Get Involved: Make a Difference Together!</h1>
				<p>
					At Maisha Mtaani, we believe that positive change starts with
					community involvement. Here's how you can be a part of our mission to
					create a brighter future for Kisumu County
				</p>
			</div>
			<div className='row'>
				<img src={volunteer} alt='' className='right' />
				<p className='left'>
					<h3> Volunteer Opportunities</h3>
					Join our team as a volunteer and lend your time, skills, and passion
					to our various programs. Whether you're interested in mentoring youth,
					participating in awareness campaigns, or contributing to environmental
					initiatives, your dedication can make a significant impact.
				</p>
			</div>
			<div className='row'>
				<p className='right'>
					<h3>Donate and sponsorships </h3>
					Your generous donations and sponsorships provide the necessary
					resources to support our programs and initiatives. Whether it's
					funding a youth empowerment workshop, planting trees, or sponsoring a
					medical camp, your contribution directly contributes to positive
					change.
				</p>
				<img src={donate} alt='' />
			</div>
			<div className='row'>
				<img src={Prisonfootball5} alt='' className='right p-img' />
				<p className='left'>
					<h3>Participate in Workshops and Events</h3>
					Attend our workshops, seminars, and community engagement events to
					learn, connect, and share experiences. Your presence and active
					participation contribute to meaningful discussions and the spread of
					awareness about important issues affecting our community.
				</p>
			</div>
			<div className='row'>
				<p className='right'>
					<h3>Collaborate and Partner</h3>
					Are you a local organization, business, or individual who shares our
					vision? Collaborate with us to amplify our impact. By working
					together, we can create synergies and implement innovative solutions
					to the challenges facing our community.
				</p>
				<img src={collaborate} alt='' className='c-img' />
			</div>
			<div className='row'>
				<img src={spreadtheword} alt='' className='right' />
				<p className='left'>
					<h3>Spread the Word</h3>
					Help us raise awareness by sharing our initiatives, events, and
					success stories with your networks. By spreading the word on social
					media, in your community, and among your friends and family, you play
					a crucial role in expanding our reach and creating a wider impact.
				</p>
			</div>
			<div className='row'>
				<p className='right'>
					<h3> Join the Mentorship Program</h3>
					Become a mentor and inspire the next generation of community leaders.
					Share your expertise, experiences, and insights to guide and empower
					youth on their journeys to success.
				</p>
				<img src={under16football3} alt='' className='ment-img' />
			</div>
			<div className='row'>
				<img src={engageonline} alt='' className='right' />
				<p className='left'>
					<h3>Engage with our Online Community</h3>
					Stay updated on our activities and engage with us on our website and
					social media platforms. By participating in discussions, sharing your
					thoughts, and providing feedback, you contribute to the ongoing growth
					and improvement of our programs
				</p>
			</div>
			<div class='button'>
				<Link to='/gallery'>
					<button className='back'>
						<img src={arrow2} alt='' />
						Back
					</button>
				</Link>
				<Link to='/contact-us'>
					<button className='btn'>
						Checkout Our Gallery <img src={arrow1} alt='' />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default GetInvolved;
