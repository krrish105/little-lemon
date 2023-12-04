import greekSalad from "../../greek salad.jpg";
import bruchetta from "../../bruchetta.svg";
import lemonDesert from "../../lemon dessert.jpg";
import SpecialsCard from "../common/SpecialsCard";

const Specials = () => {
	return (
		<section className='specials-container container'>
			<div>
				<h2 className='sub-title'>This weeks Specials!</h2>
				<button className='primary_button'>Online Menu</button>
			</div>
			<div className='specials-content'>
				<SpecialsCard
					image={greekSalad}
					name='Greek Salad'
					price='12.99'
					description='The famous greek salad of crispy lettuce, peppers, olives and our
					Chicago style feta cheese, garnished with crunchy garlic and rosemary
					croutons.'
				/>
				<SpecialsCard
					image={bruchetta}
					name='Bruschetta'
					price='5.99'
					description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
				/>
				<SpecialsCard
					image={lemonDesert}
					name='Lemon Dessert'
					price='5.00'
					description={`This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`}
				/>
			</div>
		</section>
	);
};
export default Specials;
