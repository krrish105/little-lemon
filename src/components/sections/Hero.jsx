import { Link } from "react-router-dom";
import restaurantfood from "../../restauranfood.jpg";

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='container hero-section'>
				<div className='hero_section-subcontainer'>
					<div className='hero_section-sub'>
						<h2 className='sub-title'>Little Lemon</h2>
						<span className='regular'>Chicago</span>
						<p className='descriptive'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							ultrices vulputate arcu.
						</p>
					</div>

					<Link to='/reserve-table' className='primary_button'>
						Book Table
					</Link>
				</div>
				<div>
					<img src={restaurantfood} alt='' width={500} height={200} />
				</div>
			</div>
		</div>
	);
};
export default Hero;
