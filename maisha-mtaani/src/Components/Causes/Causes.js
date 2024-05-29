import "./Causes.css";
import under16football4 from "../../assets/under16football4.jpeg";
import Prisonfootball2 from "../../assets/Prisonfootball2.jpeg";
import kitchengarden from "../../assets/kitchengarden.jpeg";
import hero4 from "../../assets/hero4.png";
import treeplanting from "../../assets/treeplanting.jpeg";
import climatechange2 from "../../assets/climatechange2.jpeg";
import under16football2 from "../../assets/under16football2.jpeg";
import solar from "../../assets/solar.jpeg";
import community from "../../assets/community.jpeg";

const Causes = () => {
	return (
		<div className=' container'>
			<div className='hero'>
				<div>
					<img src={under16football4} alt='' className='hero-img' />
				</div>
				<div className='hero-text'>
					<h1>Empowering Futures, Breaking Chains</h1>
					<p>
						Discover our transformative youth empowerment projects designed to
						educate, inspire, and uplift.
					</p>
				</div>
			</div>
			<div className='intro'>
				<h2>Projects</h2>
				<p>
					Welcome to Maisha Mtaani, where we merge drug abuse awareness with
					youth empowerment. Our projects foster resilience, knowledge, and
					community engagement to tackle substance misuse while empowering young
					individuals. Join us in shaping a healthier, more empowered
					generation, dedicated to making informed choices and creating positive
					change.
				</p>
			</div>
			<div className='projects'>
				<div className='col'>
					<h3>Rehabilitation & Empowerment</h3>
					<img src={Prisonfootball2} alt='' />
					<p>
						Our flagship program focuses on rehabilitating individuals
						struggling with drug addiction. Through counseling, vocational
						training, and employment opportunities, we empower them to rebuild
						their lives and contribute positively to society
					</p>
				</div>
				<div className='col'>
					<h3> Sustainable Kitchen-Garden</h3>
					<img src={kitchengarden} alt='' />
					<p>
						We're committed to enhancing food security and promoting healthy
						eating habits. This program empowers community members to create
						kitchen gardens, ensuring access to fresh produce and encouraging
						self-sufficiency
					</p>
				</div>
				<div className='col'>
					<h3>Awareness Campaigns</h3>
					<img src={hero4} alt='' />
					<p>
						Our campaigns address critical issues like drug abuse, crime
						prevention, and health awareness. We engage the community through
						workshops, seminars, and events, fostering informed decision-making
						and behavior change
					</p>
				</div>
				<div className='col'>
					<h3>Tree-Planting Initiative</h3>
					<img src={treeplanting} alt='' />
					<p>
						Taking steps to combat climate change, we organize tree-planting
						drives that contribute to a greener environment. This initiative
						aligns with our vision of holistic community development
					</p>
				</div>
				<div className='col'>
					<h3>Empowerment Workshops</h3>
					<img src={climatechange2} alt='' />
					<p>
						Through workshops, we equip youth with life skills, vocational
						training, and educational support, enabling them to pursue brighter
						futures and break free from the cycle of poverty and addiction.
					</p>
				</div>
				<div className='col'>
					<h3>Youth Sports and Activities</h3>
					<img src={under16football2} alt='' />
					<p>
						Our youth-focused programs include soccer tournaments, cultural
						events, and arts workshops, providing a platform for talent
						development, teamwork, and positive recreational activities.
					</p>
				</div>
				<div className='col'>
					<h3>Renewable Energy Solutions</h3>
					<img src={solar} alt='' />
					<p>
						We're at the forefront of embracing renewable energy solutions, such
						as briquetting technology and solar installations, to create a
						sustainable future and reduce environmental impact
					</p>
				</div>
				<div className='col'>
					<h3>Community Resource Center</h3>
					<img src={community} alt='' />
					<p>
						In our long-term vision, we plan to establish a resource center that
						offers educational resources, vocational training, and recreational
						facilities, fostering personal growth and community development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Causes;
