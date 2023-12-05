import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Navigation = () => {
	const [navigationVisibility, setNavigationVisibility] = useState(false);

	return (
		<nav>
			<div className='container nav_menu-container'>
				<Link to='/'>
					<img src={logo} width={160} height={40} alt='Little Lemon' />
				</Link>
				<button
					className='hamburger'
					onClick={() => setNavigationVisibility((prev) => !prev)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<div
					className={`nav_mobile-container ${
						navigationVisibility ? "active" : ""
					}`}
				>
					<ul className='nav_menu'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<a href='/#about'>About</a>
						</li>
						<li>
							<a href='/#'>Menu</a>
						</li>
						<li>
							<Link to='/reserve-table'>Reservations</Link>
						</li>
						<li>
							<a href='/#'>Order Online</a>
						</li>
						<li>
							<a href='/#'>Login</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
