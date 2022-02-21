import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import "./DetailPage.scss";
import Tab from "../components/Tab";

const DetailPage = ({ DB, stock, setStock }) => {
	const { params } = useParams();
	const data = DB[params];
	const currentStock = stock[params];
	const handleOrder = (e) => {
		const newStock = [];
		stock.forEach((st, index) => {
			if (Number(params) === Number(index)) {
				newStock.push(st - 1);
			} else {
				newStock.push(st);
			}
			setStock((prev) => newStock);
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

export default DetailPage;
