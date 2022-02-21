import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notice from "./Notice";
import "./Products.scss";

const Product = ({ data, stock }) => {
	return (
		<div className="col-md product">
			<Link to={`/detail/${data.id}`}>
				<img src={data.image} alt="" style={{ width: "100px" }} />
				<h3>{data.title}</h3>
				<p className="content">{data.content}</p>
				<p className="price">{data.price}</p>
				<p>stock {stock}</p>
			</Link>
		</div>
	);
};

const Products = ({ DB, stock }) => {
	const [alarm, setAlarm] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setAlarm((prev) => false);
		}, 5000);
	}, []);
	return (
		<div className="container">
			{alarm ? (
				<Notice>White and Black Series is almost out of stock! </Notice>
			) : null}

			<div className="row">
				{DB.map((data, index) => (
					<Product data={data} stock={stock[index]} key={index}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
