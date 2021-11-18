import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Users from "../components/Users";

function Main() {
	return (
		<Router>
			<Header />
			<Users />
			<Footer />
		</Router>
	);
}

export default Main;
