import "./Cart.scss";
import React from "react";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
	const cartDB = useSelector((data) => data.reducer);
	const event_reducer = useSelector((data) => data.이벤트stateReducer);
	const dispatch = useDispatch();

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
					{cartDB.map((data) => {
						return (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.name}</td>
								<td>{data.quantity}</td>
								<td>
									<button
										onClick={() =>
											dispatch({
												type: "수량증가",
												payload: { id: data.id, test: "moya" },
											})
										}
									>
										+
									</button>
									<button
										onClick={() =>
											dispatch({
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
			{event_reducer ? <Notice>10% Coupon</Notice> : null}
			{event_reducer ? (
				<button
					className="btn btn-danger"
					onClick={() => dispatch({ type: "이벤트안보기" })}
				>
					다시보지않기
				</button>
			) : null}
		</div>
	);
};

export default Cart;
