import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "../Footer";
import Card from "./Card";



//create your first component
const Home = () => {
	return (
		<>
		<div className="text-center">
            <Navbar/>
			<Content/>
			<Card/>
			<Footer/>		
		</div>
		</>
	);
};

export default Home;