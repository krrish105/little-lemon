import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer_row'>
					<Link to='/'>
						<img src={logo} width={160} height={40} alt='Little Lemon' />
					</Link>
					<nav>
						<ul>
							<li>
								<a href='/#'>Home</a>
							</li>
							<li>
								<a href='/#'>About</a>
							</li>
							<li>
								<a href='/#'>Menu</a>
							</li>
							<li>
								<a href='/#'>Reservations</a>
							</li>
							<li>
								<a href='/#'>Order online</a>
							</li>
							<li>
								<a href='/#'>Login</a>
							</li>
						</ul>
					</nav>
				</div>

				<ul>
					<li>
						<span>Address</span>
						<address>
							Contoso Ltd, 215 E Tasman Dr, Po Box 65502, CA 95134 San Jose
						</address>
					</li>
					<li>
						<span>Phone Number</span>
						<span>+1234567890</span>
					</li>
					<li>
						<span>Email</span>
						<span>test@test.com</span>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
