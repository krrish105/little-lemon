import TestimonialsCard from "../common/TestimonialsCard";

const Testimonials = () => {
	return (
		<section className='testimonials-container container'>
			<div>
				<h2 className='sub-title'>Testimonials</h2>
			</div>
			<div className='testimonials-content'>
				<TestimonialsCard
					rating='5+'
					name='Tia'
					review={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio,
				voluptatem fugiat quae.`}
				/>
				<TestimonialsCard
					rating='5+'
					name='Tia'
					review={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio,
				voluptatem fugiat quae.`}
				/>
				<TestimonialsCard
					rating='5+'
					name='Tia'
					review={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio,
				voluptatem fugiat quae.`}
				/>
				<TestimonialsCard
					rating='5+'
					name='Tia'
					review={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio,
				voluptatem fugiat quae.`}
				/>
			</div>
		</section>
	);
};
export default Testimonials;
