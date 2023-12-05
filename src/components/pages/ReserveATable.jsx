import ReserveTableForm from "../ReserveTableForm";
import { useReducer } from "react";
import { submitAPI } from "../../bookingAPI";
import { useNavigate } from "react-router";
import { initialTimes, updateTimes } from "../../bookingFunctions";

const ReserveTable = () => {
	const navigate = useNavigate();

	const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

	const submitHandler = (form) => {
		form.preventDefault();
		let tableFormData = new FormData(form.target);
		if (submitAPI(tableFormData)) {
			navigate("/table-reserved");
		}
	};

	return (
		<>
			<div className='container reserve_table'>
				<h1 className='sub-title'>Reserve A Table</h1>
				<ReserveTableForm
					availableTimes={availableTimes?.availableTimes}
					dispatch={dispatch}
					submitHandler={submitHandler}
				/>
			</div>
		</>
	);
};

export default ReserveTable;
