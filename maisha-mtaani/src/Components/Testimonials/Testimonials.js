import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
	{
		id: 1,
		name: "John Patrick Oluoch",
		content:
			"Maisha Mtaani gave me the support I needed to overcome my struggles with addiction. Their programs and the community they've built have been life-changing.",
	},
	{
		id: 2,
		name: "Jane Odoyo",
		content:
			"The compassion and guidance I received at Maisha Mtaani helped me reclaim my life. I am forever grateful for the new path they have shown me.",
	},
	{
		id: 3,
		name: "Alex Oketch",
		content:
			"Finding Maisha Mtaani was a turning point in my battle against drug abuse. Their dedication to recovery and mental health has made all the difference.",
	},
	{
		id: 4,
		name: "Anita Omonge",
		content:
			"Volunteering at Maisha Mtaani has been an incredibly rewarding experience. Helping others on their journey to recovery has given me a sense of purpose.",
	},
	{
		id: 5,
		name: "Czar Onyango",
		content:
			"Being part of the volunteer team at Maisha Mtaani has been a life-changing experience. The joy of seeing people reclaim their lives from addiction is unmatched.",
	},
];

const Testimonial = ({ testimonial }) => (
	<div className='testimonial container'>
		<h3>{testimonial.name}</h3>
		<p>{testimonial.content}</p>
	</div>
);

const TestimonialPage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className='testimonial-page container'>
			<h3>Testimonials</h3>
			<Slider {...settings}>
				{testimonials.map((testimonial) => (
					<Testimonial key={testimonial.id} testimonial={testimonial} />
				))}
			</Slider>
		</div>
	);
};

export default TestimonialPage;
