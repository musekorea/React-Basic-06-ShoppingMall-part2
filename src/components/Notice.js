import "./Notice.scss";

const Notice = ({ children }) => {
	return (
		<div className="notice">
			<h4 className="text">{children}</h4>
		</div>
	);
};

export default Notice;
