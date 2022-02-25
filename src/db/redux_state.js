import { createStore, combineReducers } from "redux";

const 초기데이터 = [
	{ id: 0, name: "Red Knit", quantity: 2 },
	{ id: 1, name: "White and Black", quantity: 3 },
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
		const id = state.length;
		const name = 변경.payload.name;
		const quantity = 1;
		state.push({ id, name, quantity });
		return state;
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
