import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { NavigationBar } from "./components/NavigationBar";
import { Jumbo } from "./components/Jumbo";
import { Menu } from "./components/Menu";

import {
	specials,
	pizzas,
	pizzas_extras,
	apps,
	chicken,
	chicken_extras,
	subs,
	wraps,
	wraps_extras,
	platters,
	platters_extras,
	pastas,
	salads,
	salads_extras,
} from "./utils/menu";

import "./App.css";
import { CategoryList } from "./components/CategoryList";
import { LPModal } from "./components/LPModal";

export const App: React.FC<{}> = () => {
	const [showHiringModal, setShowHiringModal] = React.useState<boolean>(false);
	return (
		<>
			{showHiringModal && (
				<LPModal
					title={"We're Hiring!"}
					description={
						"We're hiring delivery drivers! Interested in working with us? Call us at (613)821-5665 to get more info!"
					}
					onHide={() => setShowHiringModal(false)}
				/>
			)}
			<Router>
				<NavigationBar setShowHiringModal={setShowHiringModal} />
				<Jumbo specials={specials} />
				<Switch>
					<Route exact path="/">
						<>
							<CategoryList />
						</>
					</Route>

					<Route exact path="/pizzas">
						<Menu title={"Pizzas"} menu={pizzas} extras={pizzas_extras} />
					</Route>

					<Route exact path="/appetizers">
						<Menu title={"Appetizers"} menu={apps} />
					</Route>

					<Route exact path="/chicken">
						<Menu title={"Chicken"} menu={chicken} extras={chicken_extras} />
					</Route>

					<Route exact path="/subs-and-wraps">
						<Menu
							title={"Subs & Wraps"}
							menu={subs.concat(wraps)}
							extras={wraps_extras}
						/>
					</Route>

					<Route exact path="/platters">
						<Menu title={"Platters"} menu={platters} extras={platters_extras} />
					</Route>

					<Route exact path="/pasta-and-salads">
						<Menu
							title={"Pasta & Salads"}
							menu={pastas.concat(salads)}
							extras={salads_extras}
						/>
					</Route>

					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};
