import "./Cart.scss";
import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import Notice from "../components/Notice";

const Cart = (props) => {
	console.log(props);
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
					{props.장바구니.map((data) => {
						return (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.name}</td>
								<td>{data.quantity}</td>
								<td>
									<button
										onClick={() =>
											props.dispatch({
												type: "수량증가",
												payload: { id: data.id, test: "moya" },
											})
										}
									>
										+
									</button>
									<button
										onClick={() =>
											props.dispatch({
												type: "수량감소",
												payload: { id: data.id, test: "moya" },
											})
										}
									>
										-
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{props.이벤트stateReducer ? <Notice>10% Coupon</Notice> : null}
			{props.이벤트stateReducer ? (
				<button
					className="btn btn-danger"
					onClick={() => props.dispatch({ type: "이벤트안보기" })}
				>
					다시보지않기
				</button>
			) : null}
		</div>
	);
};

const reduxProps = (data) => {
	return {
		장바구니: data.reducer,
		이벤트stateReducer: data.이벤트stateReducer,
	};
};

export default connect(reduxProps)(Cart);
