import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import "./DetailPage.scss";
import Tab from "../components/Tab";
import { connect } from "react-redux";
//DB
const DetailPage = (props) => {
	const { params } = useParams();
	const data = props.DB[params];
	const currentStock = props.stock[params];

	const handleOrder = (e) => {
		props.dispatch({
			type: "주문",
			payload: { id: data.id, name: data.title, quantity: 1 },
		});
		const newStock = [];
		props.stock.forEach((st, index) => {
			if (Number(params) === Number(index)) {
				newStock.push(st - 1);
			} else {
				newStock.push(st);
			}
			props.setStock((prev) => newStock);
		});
	};
	return (
		<div className="detail">
			<Navbar></Navbar>
			<Notice>Almost out of stock ~ Order Now !!</Notice>
			<div className="product">
				<img src={data.image} alt="" />
				<h3>{data.title}</h3>
				<p className="content">{data.content}</p>
				<p className="price">{data.price}</p>
				<p>stock {currentStock}</p>
				<button className="btn btn-danger" onClick={handleOrder}>
					주문하기
				</button>
			</div>
			<Tab></Tab>
		</div>
	);
};

const reduxProps = (data) => {
	return {
		장바구니: data.reducer,
		이벤트stateReducer: data.이벤트stateReducer,
	};
};

export default connect(reduxProps)(DetailPage);
