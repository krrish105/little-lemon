import { fetchAPI } from "./bookingAPI";

export const initialTimes = { availableTimes: fetchAPI(new Date()) };
export const updateTimes = (state, date) => {
	return {
		availableTimes: fetchAPI(new Date(date)),
	};
};
