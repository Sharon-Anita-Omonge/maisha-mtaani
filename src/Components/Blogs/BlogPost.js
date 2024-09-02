import React from "react";
import "./BlogList.css";

const BlogPost = ({ title, date, image, description, onClick }) => {
	return (
		<div className='blog-post container'>
			<img src={image} alt={title} className='blog-post-image' />
			<h3>{title}</h3>
			<p className='blog-post-meta'>{date}</p>
			<p>{description}</p>
			<button onClick={onClick} className='read-more-button'>
				Read more ...
			</button>
		</div>
	);
};

export default BlogPost;
