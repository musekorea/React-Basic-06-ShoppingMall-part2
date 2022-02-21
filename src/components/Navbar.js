import "./Navbar.scss";
import logo from "../images/apple.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="" width="30" height="30" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								Shoes Shop
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/cart" className="nav-link">
								Cart
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								to="#"
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link to="#" className="dropdown-item">
										Action
									</Link>
								</li>
								<li>
									<Link to="#" className="dropdown-item">
										Another action
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link to="/" className="dropdown-item">
										Something else here
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link to="#" className="nav-link disabled">
								Disabled
							</Link>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
