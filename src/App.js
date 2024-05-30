import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import Causes from "./Components/Causes/Causes";
import StatisticsContainer from "./Components/CountUp/CountUp";
import TestimonialPage from "./Components/Testimonials/Testimonials";
import Gallery from "./Components/Galllery/Gallery";
import ScrollToTop from "./Components/ScrollToTop";
import Volunteer from "./Components/Volunteer/Volunteer";

const App = () => {
	return (
		<div>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/causes' element={<Causes />} />
				<Route path='/getinvolved' element={<GetInvolved />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/statisticscontainer' element={<StatisticsContainer />} />
				<Route path='/testimonials' element={<TestimonialPage />} />
				<Route path='/volunteer' element={<Volunteer />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
