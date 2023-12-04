import user from "../../user.png";

const TestimonialsCard = ({ rating, name, review }) => {
	return (
		<div className='testimonials_card'>
			<span>{rating}</span>
			<div>
				<img src={user} alt='' width={48} />
				<span>{name}</span>
			</div>
			<p>{review}</p>
		</div>
	);
};
export default TestimonialsCard;
