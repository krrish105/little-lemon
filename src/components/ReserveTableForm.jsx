import { useState } from "react";

const ReserveTableForm = ({ availableTimes, dispatch, submitHandler }) => {
	const [formData, setFormData] = useState({
		name: "",
		date: "",
		time: "",
		numberOfGuests: 1,
		occasion: "",
	});
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleChange = (event) => {
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
		if (event.target.name === "date") {
			dispatch(event.target.value);
		}
	};

	const submitButtonStateChange = () => {
		if (
			!formData.name ||
			!formData.date ||
			!formData.time ||
			!formData.occasion
		) {
			setIsButtonDisabled(true);
		} else {
			setIsButtonDisabled(false);
		}
	};

	return (
		<form onSubmit={(e) => submitHandler(e)}>
			<div className='input_container'>
				<label htmlFor='res-name'>Name</label>
				<input
					type='text'
					id='res-name'
					name='name'
					defaultValue={formData.name}
					onChange={handleChange}
					onBlur={submitButtonStateChange}
					required
				/>
			</div>
			<div className='input_container'>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					name='date'
					required
					defaultValue={formData.date}
					onChange={handleChange}
					onBlur={submitButtonStateChange}
				/>
			</div>
			<div className='input_container'>
				<label htmlFor='res-time'>Choose time</label>
				<select
					id='res-time'
					onChange={handleChange}
					onBlur={submitButtonStateChange}
					name='time'
					defaultValue={formData.time}
					required
				>
					{availableTimes?.map((el, i) => (
						<option key={el} value={el}>
							{el}
						</option>
					))}
				</select>
			</div>
			<div className='input_container'>
				<label htmlFor='guests'>Number of guests</label>
				<input
					type='number'
					placeholder='1'
					min='1'
					max='10'
					id='guests'
					name='numberOfGuests'
					required
					defaultValue={formData.numberOfGuests}
					onChange={handleChange}
					onBlur={submitButtonStateChange}
				/>
			</div>
			<div className='input_container'>
				<label htmlFor='occasion'>Occasion</label>
				<select
					id='occasion'
					required
					name='occasion'
					defaultValue={formData.occasion}
					onChange={handleChange}
					onBlur={submitButtonStateChange}
				>
					<option>Birthday</option>
					<option>Engagement</option>
					<option>Anniversary</option>
				</select>
			</div>
			{isButtonDisabled ? (
				<button className='primary_button' type='submit' disabled>
					Make Your reservation
				</button>
			) : (
				<button className='primary_button' type='submit'>
					Make Your reservation
				</button>
			)}
		</form>
	);
};

export default ReserveTableForm;
