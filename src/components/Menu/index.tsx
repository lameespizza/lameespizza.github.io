import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

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
	size: string[];
	price: number[];
}

interface MenuProps {
	title: string;
	menu: Menu[];
	extras?: Extras[];
}

export const Menu: React.FC<MenuProps> = (props) => {
	const { title, menu, extras } = props;

	const [search, setSearch] = React.useState<string>("");

	const renderMenu = () => {
		const list: any[] = [];

		menu.forEach((item) => {
			if (!search) {
				list.push(
					<Col
						md={6}
						style={{
							marginBottom: "15px",
						}}
					>
						<ItemCard
							title={item.name}
							desc={item.description}
							size={item.size}
							price={item.price}
						/>
					</Col>
				);
			} else if (
				search &&
				item.name.toLowerCase().includes(search.toLowerCase())
			) {
				list.push(
					<Col
						md={6}
						style={{
							marginBottom: "15px",
						}}
					>
						<ItemCard
							title={item.name}
							desc={item.description}
							size={item.size}
							price={item.price}
						/>
					</Col>
				);
			}
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
						size={extra.size}
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
				<Form.Control
					type="text"
					value={search}
					style={{ marginBottom: "25px" }}
					placeholder="Search menu"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>

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
