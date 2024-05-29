import React from "react";
import { Link } from "react-router-dom";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

const ContactUs = () => {
	return (
		<div>
			<h1>Contact Us</h1>
			<div class='button'>
				<Link to='/'>
					<button className='back'>
						<img src={arrow2} alt='' />
						Back
					</button>
				</Link>
				<Link to='/projects'>
					<button className='btn'>
						Checkout Our Gallery <img src={arrow1} alt='' />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactUs;
