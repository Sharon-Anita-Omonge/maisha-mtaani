import React, { useState } from "react";
import "./Gallery.css";
import Prisonfootball1 from "../../assets/Prisonfootball1.jpeg";
import Prisonfootball2 from "../../assets/Prisonfootball2.jpeg";
import Prisonfootball3 from "../../assets/Prisonfootball3.jpeg";
import Prisonfootball4 from "../../assets/Prisonfootball4.jpeg";
import Prisonfootball5 from "../../assets/Prisonfootball5.jpeg";
import Prisonfootball6 from "../../assets/Prisonfootball6.jpeg";
import Prisonfootball7 from "../../assets/Prisonfootball7.jpeg";
import under16football1 from "../../assets/under16football1.jpeg";
import under16football2 from "../../assets/under16football2.jpeg";
import under16football3 from "../../assets/under16football3.jpeg";
import under16football4 from "../../assets/under16football4.jpeg";
import under16football5 from "../../assets/under16football5.jpeg";
import under16football6 from "../../assets/under16football6.jpeg";
import kitchengarden1 from "../../assets/kitchengarden1.jpeg";
import festival from "../../assets/festival.jpeg";
import festival2 from "../../assets/festival2.jpeg";
import festival3 from "../../assets/festival3.jpeg";
import climatechange1 from "../../assets/climatechange1.jpeg";
import climatechange2 from "../../assets/climatechange2.jpeg";
import climatechange3 from "../../assets/climatechange3.jpeg";
import rightarrow from "../../assets/rightchev.png";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";
import gallery4 from "../../assets/gallery4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";
import gallery7 from "../../assets/gallery7.jpeg";
import gallery8 from "../../assets/gallery8.jpeg";
import gallery9 from "../../assets/gallery9.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";
import gallery11 from "../../assets/gallery11.jpeg";
import gallery12 from "../../assets/gallery12.jpeg";
import gallery13 from "../../assets/gallery13.jpeg";
import gallery14 from "../../assets/gallery14.jpeg";
import gallery15 from "../../assets/gallery15.jpeg";
import gallery16 from "../../assets/gallery16.jpeg";
import gallery17 from "../../assets/gallery17.jpeg";
import gallery18 from "../../assets/gallery18.jpeg";
import gallery19 from "../../assets/gallery19.jpeg";
import gallery20 from "../../assets/gallery20.jpeg";
import gallery21 from "../../assets/gallery21.jpeg";
import gallery22 from "../../assets/gallery22.jpeg";
import gallery23 from "../../assets/gallery23.jpeg";
import gallery24 from "../../assets/gallery24.jpeg";
import gallery25 from "../../assets/gallery25.jpeg";
import gallery26 from "../../assets/gallery26.jpeg";
import gallery27 from "../../assets/gallery27.jpeg";
import gallery28 from "../../assets/gallery28.jpeg";
import gallery29 from "../../assets/gallery29.jpeg";
import gallery30 from "../../assets/gallery30.jpeg";
import gallery31 from "../../assets/gallery31.jpeg";
import gallery32 from "../../assets/gallery32.jpeg";
import gallery33 from "../../assets/gallery33.jpeg";
import gallery34 from "../../assets/gallery34.jpeg";
import gallery35 from "../../assets/gallery35.jpeg";
import gallery37 from "../../assets/gallery37.jpeg";
import gallery38 from "../../assets/gallery38.jpeg";
import gallery39 from "../../assets/gallery39.jpeg";
import gallery40 from "../../assets/gallery40.jpeg";
import gallery41 from "../../assets/gallery41.jpeg";
import gallery42 from "../../assets/gallery42.jpeg";
import gallery43 from "../../assets/gallery43.jpeg";
import gallery44 from "../../assets/gallery44.jpeg";
import gallery45 from "../../assets/gallery45.jpeg";
import gallery46 from "../../assets/gallery46.jpeg";
import gallery47 from "../../assets/gallery47.jpeg";
import gallery48 from "../../assets/gallery48.jpeg";
import gallery49 from "../../assets/gallery49.jpeg";
import gallery50 from "../../assets/gallery50.jpeg";
import gallery51 from "../../assets/gallery51.jpeg";
import gallery52 from "../../assets/gallery52.jpeg";
import gallery53 from "../../assets/gallery53.jpeg";
import { Link } from "react-router-dom";

const images = [
	Prisonfootball1,
	Prisonfootball2,
	Prisonfootball3,
	Prisonfootball4,
	Prisonfootball5,
	Prisonfootball6,
	Prisonfootball7,
	under16football1,
	under16football2,
	under16football3,
	under16football4,
	under16football5,
	under16football6,
	kitchengarden1,
	festival,
	festival2,
	festival3,
	climatechange1,
	climatechange2,
	climatechange3,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8,
	gallery9,
	gallery10,
	gallery11,
	gallery12,
	gallery13,
	gallery14,
	gallery15,
	gallery16,
	gallery17,
	gallery18,
	gallery19,
	gallery20,
	gallery21,
	gallery22,
	gallery23,
	gallery24,
	gallery25,
	gallery26,
	gallery27,
	gallery28,
	gallery29,
	gallery30,
	gallery31,
	gallery32,
	gallery33,
	gallery34,
	gallery35,
	gallery37,
	gallery38,
	gallery39,
	gallery40,
	gallery41,
	gallery42,
	gallery43,
	gallery44,
	gallery45,
	gallery46,
	gallery47,
	gallery48,
	gallery49,
	gallery50,
	gallery51,
	gallery52,
	gallery53,
];

const Gallery = () => {
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
		<>
			<div className='pics-gallery hero'>
				<h1>Our Gallery</h1>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<Link to='/gallery'>
						<h5>Gallery</h5>
					</Link>
				</div>
			</div>
			<div
				className='container'
				style={{ textAlign: "center", marginTop: "5%", marginBottom: "3%" }}
			>
				<h3>Gallery</h3>
				<p>Here is Maisha Mtaani at work</p>
			</div>
			<div className='gallery'>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Gallery ${index}`}
						onClick={() => handleImageClick(index)}
						className='gallery-image'
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
		</>
	);
};

export default Gallery;
