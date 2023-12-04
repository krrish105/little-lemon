import { render, screen } from "@testing-library/react";
import App from "./App";
import ReserveTable from "./pages/ReserveATable";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test("Renders the BookingForm Heading", () => {
	render(<ReserveTable />);
	const headingElement = screen.getByText("Reserve A Table");
	expect(headingElement).toBeInTheDocument();
});
