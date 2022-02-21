import "./App.css";
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage.js";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DB from "./db/fakeDB";

function App() {
	const [products, setProducts] = useState(() => DB);
	const [stock, setStock] = useState(() => [10, 10, 10]);
	const updateDB = (moreProducts) => {
		setProducts((prev) => [...prev, ...moreProducts]);
	};
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<LandingPage DB={products} updateDB={updateDB} stock={stock} />
						}
					></Route>
					<Route
						path="/detail/:params"
						element={
							<DetailPage DB={products} stock={stock} setStock={setStock} />
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
