import React from "react";
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
		</div>
	);
};

export default Volunteer;
