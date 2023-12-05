import { render, screen } from "@testing-library/react";
import ReserveTable from "./components/pages/ReserveATable";
import { initialTimes, updateTimes } from "./bookingFunctions";
import { BrowserRouter } from "react-router-dom";

test("Renders the BookingForm Heading", () => {
	render(
		<BrowserRouter>
			<ReserveTable />
		</BrowserRouter>
	);
	const headingElement = screen.getByText("Reserve A Table");
	expect(headingElement).toBeInTheDocument();
});

test("Initialize Times", () => {
	const result = initialTimes;

	expect(result).toBeTruthy();
	expect(result.availableTimes.length).toBeGreaterThan(0);
});

test("Update Times", () => {
	const initial = initialTimes;

	const result = updateTimes(initial, new Date());

	expect(result).toBeTruthy();
	expect(result).toMatchObject(initial);
});
