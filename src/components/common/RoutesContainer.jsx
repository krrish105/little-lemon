import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../common/Navigation";
import Home from "../pages/Home";
import ReserveTable from "../pages/ReserveATable";
import Footer from "../common/Footer";
import ConfirmedBooking from "../pages/ConfirmedBooking";

const RoutesContainer = () => {
	return (
		<Router forceRefresh={true}>
			<div>
				<Navigation />
				<main>
					<Routes>
						<Route exact path='/' element={<Home />}></Route>
						<Route
							exact
							path='/reserve-table'
							element={<ReserveTable />}
						></Route>
						<Route
							exact
							path='/table-reserved'
							element={<ConfirmedBooking />}
						></Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};
export default RoutesContainer;
