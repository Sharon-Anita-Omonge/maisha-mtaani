import React from "react";
import "./CountUp.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import volunteer from "../../assets/team.png";
import causes from "../../assets/health.png";
import years from "../../assets/expertise.png";
import { Link } from "react-router-dom";

const Statistic = ({ value, suffix, description }) => {
	return (
		<div style={{ fontWeight: "900" }}>
			<VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
				{({ isVisible }) => (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "40px",
							width: "150px",
						}}
					>
						<h4>
							{isVisible ? (
								<CountUp
									end={value}
									duration={2}
									style={{ fontSize: "40px", color: "#ffff" }}
								/>
							) : null}
						</h4>
						<span style={{ fontSize: "40px" }}>{suffix}</span>
					</div>
				)}
			</VisibilitySensor>

			<p>{description}</p>
		</div>
	);
};

const StatisticsContainer = () => {
	return (
		<div className='stat'>
			<div>
				<p>
					We have been serving the people of Kisumu County for over 9 years,
					creating awareness about drug abuse and its consequences.
				</p>
				<Link>
					<button className='btn'>Be Part of Us</button>
				</Link>
			</div>
			<div>
				<img src={years} alt='' />
				<Statistic value={9} suffix='+' description='years of experience' />
			</div>
			<div>
				<img src={causes} alt='' />
				<Statistic value={100} suffix='+' description='Causes' />
			</div>
			<div>
				<img src={volunteer} alt='' />
				<Statistic value={100} suffix='+' description='Volunteers ' />
			</div>
		</div>
	);
};

export default StatisticsContainer;
