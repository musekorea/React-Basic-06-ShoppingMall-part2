import styles from "./Main.module.css";
//test
const Main = () => {
	return (
		<div className={styles.main}>
			<h3 className={styles.title}>20% Season Off</h3>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed totam
				rerum delectus magnam aliquid harum doloribus corporis laborum optio,
				expedita est illo commodi quaerat ipsam inventore animi quibusdam
				repellat veniam.
			</p>
			<button type="button" className="btn btn-primary">
				Learn More
			</button>
		</div>
	);
};

export default Main;
