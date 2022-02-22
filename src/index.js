import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const 초기데이터 = [
	{ id: 0, name: "Red Knit", quantity: 2 },
	{ id: 1, name: "White and Black", quantity: 3 },
];

const reducer = (state = 초기데이터, 변경) => {
	const copy초기데이터 = [...state];
	if (변경.type === "수량증가") {
		copy초기데이터[0].quantity += 1;
		return copy초기데이터;
	} else if (변경.type === "수량감소") {
		if (copy초기데이터[0].quantity <= 0) {
			copy초기데이터[0].quantity = 0;
			return copy초기데이터;
		}
		copy초기데이터[0].quantity -= 1;
		return copy초기데이터;
	} else {
		return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
