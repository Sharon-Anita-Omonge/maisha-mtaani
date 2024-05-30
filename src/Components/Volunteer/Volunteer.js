import "./Volunteer.css";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/rightchev.png";

const Volunteer = () => {
	return (
		<div className='volunteer-page'>
			<div className='hero volunteer'>
				<div>
					<h1>Beceome a Volunteer</h1>
				</div>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<h5>Volunteer</h5>
				</div>
			</div>
			<div className='form-container container'>
				<div className='form-section'>
					<form
						action='mailto:your-email@example.com'
						method='POST'
						enctype='text/plain'
						className='form'
					>
						<label>
							<input type='text' name='name' placeholder='Name' required />
						</label>
						<label>
							<input type='email' name='email' placeholder='Email' required />
						</label>
						<label>
							<textarea
								name='message'
								rows='5'
								placeholder='Why do you want to be a volunteer?'
								required
							/>
						</label>
						<button type='submit' className='btn' id='butt'>
							Become a Volunteer
						</button>
					</form>
				</div>
				<div className='text-section'>
					<h4>Become a Volunteer</h4>
					<h3>Let’s make a difference in the lives of others</h3>
					<p>
						Your efforts as a volunteer can create positive change, providing
						mentorship, education, and support. Together, we can empower young
						individuals, fostering growth, resilience, and hope. Join us today
						and be part of something meaningful—a network of compassion,
						inspiration, and transformation.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Volunteer;
