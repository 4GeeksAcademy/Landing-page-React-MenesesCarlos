import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "../Footer";
import Card from "./Card";


//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Content />
        <Card />
      </main>
      <Footer />
    </>
  );
};

export default Home;