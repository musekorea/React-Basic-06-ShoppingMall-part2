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
					{props.datas.map((data) => {
						return (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.name}</td>
								<td>{data.quantity}</td>
								<td>
									<button onClick={() => props.dispatch({ type: "수량증가" })}>
										+
									</button>
									<button onClick={() => props.dispatch({ type: "수량감소" })}>
										-
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const reduxProps = (data) => {
	return {
		datas: data,
	};
};

export default connect(reduxProps)(Cart);
