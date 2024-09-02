import React from "react";
import BlogPost from "./BlogPost";
import "./BlogList.css";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/rightchev.png";

const blogPosts = [
	{
		title: "Raise fund cause cancer patient's",
		date: "19 August 2019",
		image: "path/to/image1.jpg",
		description:
			"It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.",
		link: "https://example.com/post1",
	},
	{
		title: "Building water system for poor",
		date: "19 August 2019",
		image: "path/to/image2.jpg",
		description:
			"It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.",
		link: "https://example.com/post2",
	},
	{
		title: "Raise fund to helping little hands",
		date: "19 August 2019",
		image: "path/to/image3.jpg",
		description:
			"It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.",
		link: "https://example.com/post3",
	},
];

const BlogList = () => {
	return (
		<>
			<div className='blog hero'>
				<div>
					<h1>Blogs</h1>
				</div>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<h5>Blogs</h5>
				</div>
			</div>
			<div className='blog-list'>
				{blogPosts.map((post, index) => (
					<BlogPost
						key={index}
						title={post.title}
						date={post.date}
						image={post.image}
						description={post.description}
						link={post.link}
					/>
				))}
			</div>
		</>
	);
};

export default BlogList;
