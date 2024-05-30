import React from "react";
import "./ContactUs.css";
import rightarrow from "../../assets/rightchev.png";
import { Link } from "react-router-dom";
import phone from "../../assets/bphone.png";
import email from "../../assets/bemail.png";
import map from "../../assets/bmaps.png";
import mailbox from "../../assets/mailbox.png";

function ContactForm() {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
		}
	};
	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = "tel:+254710466533";
	};

	const handleEmailClick = (event) => {
		event.preventDefault();
		window.location.href = "mailto:info@ocheanbays.com";
	};
	return (
		<div className='contact-page'>
			<div className='hero contact'>
				<div>
					<h1>Contact Us</h1>
				</div>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<h5>Contact</h5>
				</div>
			</div>
			<div className='contact-body container'>
				<form onSubmit={onSubmit}>
					<h3>Get In Touch With Us</h3>
					<p>
						We are here to answer your questions. If you have any questions
						please leave us a message. We will contact with you as soon as
						possible.
					</p>
					<div className='input-section'>
						<label htmlFor='name'>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Your Name'
								required
							/>
						</label>
						<label htmlFor='email'>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								required
							/>
						</label>
						<label htmlFor='phone'>
							<input type='tel' id='phone' name='phone' placeholder='Phone' />
						</label>
						<label htmlFor='subject'>
							<input
								type='text'
								id='subject'
								name='subject'
								placeholder='Subject'
								required
							/>
						</label>
					</div>
					<label htmlFor='message'>
						<textarea
							id='message'
							name='message'
							rows='5'
							placeholder='Your message'
							required
						/>
					</label>
					<button className='btn' type='submit'>
						SEND MESSAGE
					</button>
				</form>
				<div className='location-section'>
					<div className='loco'>
						<div className='colo'>
							<img src={map} alt='' />
							<h4>Visit Office</h4>
						</div>
						<div>
							<p>Kondele, Kisumu County,</p>
							<p>Kenya</p>
						</div>
					</div>
					<div className='loco'>
						<div className='colo'>
							<img src={mailbox} alt='' />
							<h4>Send Us Mail</h4>
						</div>
						<div>
							<p>P.O.Box 40100-151, kisumu</p>
						</div>
					</div>
					<div className='loco'>
						<div className='colo'>
							<img src={email} alt='' />
							<h4>Email Us</h4>
						</div>
						<div>
							<p>
								<a
									href='mailto:info@maishamtaani.org'
									onClick={handleEmailClick}
								>
									info@maishamtaani.org
								</a>
							</p>
						</div>
					</div>
					<div className='loco'>
						<div className='colo'>
							<img src={phone} alt='' />
							<h4>Call Us</h4>
						</div>
						<div>
							<p>
								{" "}
								<a href='tel:254763858515' onClick={handlePhoneClick}>
									+254 763 858 515
								</a>
							</p>
							<p>
								<a href='tel:254702582348' onClick={handlePhoneClick}>
									+254 702 582 348
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
