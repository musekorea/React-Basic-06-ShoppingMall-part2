import { createStore, combineReducers } from "redux";

const 초기데이터 = [
	{ id: 0, name: "White and Black", quantity: 3 },
	{ id: 1, name: "Red Knit", quantity: 2 },
];

const reducer = (state = 초기데이터, 변경) => {
	const copy초기데이터 = [...state];
	if (변경.type === "수량증가") {
		copy초기데이터[변경.payload.id].quantity += 1;
		return copy초기데이터;
	} else if (변경.type === "수량감소") {
		if (copy초기데이터[변경.payload.id].quantity <= 0) {
			copy초기데이터[변경.payload.id].quantity = 0;
			return copy초기데이터;
		}
		copy초기데이터[변경.payload.id].quantity -= 1;
		return copy초기데이터;
	} else if (변경.type === "주문") {
		const id = 변경.payload.id;
		const name = 변경.payload.name;
		const quantity = 1;
		const findItem = copy초기데이터.find((data) => data.id === id);
		if (findItem) {
			findItem.quantity++;
		} else {
			copy초기데이터.push({ id, name, quantity });
		}

		return copy초기데이터;
	} else {
		return state;
	}
};

const 이벤트state = true;

const 이벤트stateReducer = (state = 이벤트state, 변경) => {
	if (변경.type === "이벤트안보기") {
		return !state;
	} else {
		return state;
	}
};

const store = createStore(combineReducers({ reducer, 이벤트stateReducer }));

export default store;
