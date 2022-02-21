import "./Cart.scss";
import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";

const Cart = (props) => {
	return (
		<div className="cart-container">
			<Navbar></Navbar>
			<table className="table1">
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.id}</td>
						<td>{props.name}</td>
						<td>{props.quantity}</td>
						<td>sample</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const reduxProps = (data) => {
	return {
		id: data[0].id,
		name: data[0].name,
		quantity: data[0].quantity,
	};
};

export default connect(reduxProps)(Cart);
