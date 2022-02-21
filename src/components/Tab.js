import "./Tab.scss";
import React, { useState } from "react";

const Content = ({ tabNumber }) => {
	if (tabNumber === "tab1") {
		return (
			<div
				className={tabNumber === "tab1" ? " tab-content fadeIn" : "tab-content"}
			>
				Content1
			</div>
		);
	} else if (tabNumber === "tab2") {
		return (
			<div
				className={tabNumber === "tab2" ? " tab-content fadeIn" : "tab-content"}
			>
				Content2
			</div>
		);
	} else if (tabNumber === "tab3") {
		return (
			<div
				className={tabNumber === "tab3" ? " tab-content fadeIn" : "tab-content"}
			>
				Content3
			</div>
		);
	} else {
		return;
	}
};

const Tab = () => {
	const [tabNumber, setTabNumber] = useState("tab1");
	const handleTabClick = (e) => {
		console.log(e.target.id);
		setTabNumber((prev) => e.target.id);
	};
	return (
		<div>
			<ul className="tabWrapper">
				<li id="tab1" onClick={handleTabClick}>
					Tab1
				</li>
				<li id="tab2" onClick={handleTabClick}>
					Tab2
				</li>
				<li id="tab3" onClick={handleTabClick}>
					Tab3
				</li>
			</ul>
			<Content tabNumber={tabNumber}></Content>
		</div>
	);
};

export default Tab;
