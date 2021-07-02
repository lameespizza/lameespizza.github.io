import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

export const App: React.FC<{}> = () => {
	return (
		<Router>
			<NavigationBar />
			<Jumbo specials={specials} />
			<Switch>
				<Route exact path="/">
					<>
						<CategoryList />
					</>
				</Route>

				<Route path="/pizzas">
					<Menu title={"Pizzas"} menu={pizzas} extras={pizzas_extras} />
				</Route>

				<Route path="/appetizers">
					<Menu title={"Appetizers"} menu={apps} />
				</Route>

				<Route path="/chicken">
					<Menu title={"Chicken"} menu={chicken} extras={chicken_extras} />
				</Route>

				<Route path="/subs-and-wraps">
					<Menu
						title={"Subs & Wraps"}
						menu={subs.concat(wraps)}
						extras={wraps_extras}
					/>
				</Route>

				<Route path="/platters">
					<Menu title={"Platters"} menu={platters} extras={platters_extras} />
				</Route>

				<Route path="/pasta-and-salads">
					<Menu
						title={"Pasta & Salads"}
						menu={pastas.concat(salads)}
						extras={salads_extras}
					/>
				</Route>
			</Switch>
		</Router>
	);
};
