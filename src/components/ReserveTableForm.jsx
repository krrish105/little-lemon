import { useState } from "react";

const ReserveTableForm = ({ availableTimes, dispatch, submitHandler }) => {
	const [name, setName] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [numberOfGuests, setNumberOfGuests] = useState();
	const [occasion, setOccasion] = useState();

	function onChangeForDate(e) {
		setDate(e.target.value);
		dispatch(e.target.value);
	}

	return (
		<form>
			<div className='input_container'>
				<label htmlFor='res-name'>Name</label>
				<input
					type='text'
					id='res-name'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='input_container'>
				<label htmlFor='res-date'>Choose date</label>
				<input type='date' id='res-date' onChange={(e) => onChangeForDate(e)} />
			</div>
			<div className='input_container'>
				<label htmlFor='res-time'>Choose time</label>
				<select id='res-time' onChange={(e) => setTime(e.target.value)}>
					{availableTimes?.map((el, i) => (
						<option key={el} selected={el === time ? true : false}>
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
					onChange={(e) => setNumberOfGuests(e.target.value)}
				/>
			</div>
			<div className='input_container'>
				<label htmlFor='occasion'>Occasion</label>
				<select id='occasion' onChange={(e) => setOccasion(e.target.value)}>
					<option>Birthday</option>
					<option>Engagement</option>
					<option>Anniversary</option>
				</select>
			</div>

			<button className='primary_button' type='submit' onClick={submitHandler}>
				Make Your reservation
			</button>
		</form>
	);
};

export default ReserveTableForm;
