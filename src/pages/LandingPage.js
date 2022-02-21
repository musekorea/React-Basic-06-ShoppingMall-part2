import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Products from "../components/Products";
import "./LandingPage.scss";
import { useState } from "react";

const LandingPage = ({ DB, updateDB, stock }) => {
	const [loading, setLoading] = useState(false);
	const handleMoreProducts = async (e) => {
		setLoading((prev) => true);
		e.preventDefault();
		try {
			const reqProducts = await fetch(
				"https://codingapple1.github.io/shop/data2.json"
			);
			if (reqProducts.status === 200) {
				const jsonProducts = await reqProducts.json();
				updateDB(jsonProducts);
				setLoading((prev) => false);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="landing-page">
			<Navbar></Navbar>
			<Main></Main>
			<Products DB={DB} stock={stock}></Products>
			{loading ? <h3>"Loading"</h3> : null}
			<button className="btn btn-primary" onClick={handleMoreProducts}>
				More Products
			</button>
		</div>
	);
};

export default LandingPage;
