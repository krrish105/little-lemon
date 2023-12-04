import ReserveTableForm from "../ReserveTableForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../bookingAPI";
import { useNavigate } from "react-router";

const ReserveTable = () => {
	const navigate = useNavigate();
	const initialTimes = { availableTimes: fetchAPI(new Date()) };

	const updateTimes = (state, date) => {
		return {
			availableTimes: fetchAPI(new Date(date)),
		};
	};

	const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

	const submitHandler = (formData) => {
		if (submitAPI(formData)) {
			navigate("/table-reserved");
		}
	};

	return (
		<>
			<div className='container reserve_table'>
				<h1 className='sub-title'>Reserve A Table</h1>
				<ReserveTableForm
					availableTimes={availableTimes.availableTimes}
					dispatch={dispatch}
					submitHandler={submitHandler}
				/>
			</div>
		</>
	);
};

export default ReserveTable;
