import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { ItemCard } from "../ItemCard";

interface Menu {
	name: string;
	description: string;
	size: string[];
	price: number[];
}

interface Extras {
	name: string;
	description: string;
	price: number[];
}

interface MenuProps {
	title: string;
	menu: Menu[];
	extras?: Extras[];
}

export const Menu: React.FC<MenuProps> = (props) => {
	const { title, menu, extras } = props;

	const renderMenu = () => {
		const list: any[] = [];

		menu.forEach((item) => {
			list.push(
				<Col md={4} style={{ marginBottom: "15px" }}>
					<ItemCard
						title={item.name}
						desc={item.description}
						size={item.size}
						price={item.price}
					/>
				</Col>
			);
		});

		return list;
	};

	const renderExtras = () => {
		const list: any[] = [];

		extras?.forEach((extra) => {
			list.push(
				<Col md={4} style={{ marginBottom: "15px" }}>
					<ItemCard
						title={extra.name}
						desc={extra.description}
						size={[]}
						price={extra.price}
					/>
				</Col>
			);
		});

		return list;
	};

	return (
		<>
			<Container style={{ marginTop: "25px", marginBottom: "25px" }}>
				<h4 className="thick orange-font">🍽 {title}</h4>
			</Container>
			<Container>
				<Row>{renderMenu()}</Row>
			</Container>
			{!extras || (extras && extras.length === 0) ? null : (
				<>
					<Container style={{ marginTop: "25px", marginBottom: "25px" }}>
						<h4 className="thick orange-font">⭐️ Extras</h4>
					</Container>
					<Container>
						<Row>{renderExtras()}</Row>
					</Container>
				</>
			)}
		</>
	);
};
