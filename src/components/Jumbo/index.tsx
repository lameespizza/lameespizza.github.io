import React from "react";

import { Col, Row, Container, Carousel } from "react-bootstrap";

import { ItemCard } from "../ItemCard";

interface Special {
	name: string;
	description: string;
	size: string[];
	price: number[];
}

interface JumboProps {
	specials: Special[];
}

export const Jumbo: React.FC<JumboProps> = (props) => {
	const { specials } = props;

	const renderSpecials = () => {
		const specialsList = [];
		let cards = [];
		for (let i = 0; i < specials.length; i++) {
			cards.push(
				<Col md={6} style={{ marginTop: "5px", marginBottom: "5px" }}>
					<ItemCard
						title={specials[i].name}
						desc={specials[i].description}
						size={specials[i].size}
						price={specials[i].price}
					/>
				</Col>
			);

			if (cards.length === 2) {
				specialsList.push(
					<Carousel.Item>
						<Row>{cards}</Row>
					</Carousel.Item>
				);

				cards = [];
			}
		}

		if (cards.length !== 0) {
			cards.unshift(<Col md={3} />);

			specialsList.push(
				<Carousel.Item>
					<Row>{cards}</Row>
				</Carousel.Item>
			);
		}

		return specialsList;
	};

	return (
		<>
			<Container
				style={{
					borderRadius: "5px",
					marginTop: "25px",
					paddingTop: "25px",
					paddingBottom: "25px",
				}}
				className="text-center thick"
			>
				<Row>
					<Col md={6}>
						<a
							className="brown-font"
							style={{ textDecoration: "none" }}
							href="https://goo.gl/maps/3upZjH7MnZ5X7SEL7"
							target="_blank"
						>
							🏠 6537 Bank Street, ON
						</a>
					</Col>

					<Col className="brown-font" md={6}>
						📞 (613) 821-5665
					</Col>
				</Row>
			</Container>
			<Container style={{ marginTop: "25px", marginBottom: "25px" }}>
				<h4 className="thick orange-font">🍕 Specials</h4>
			</Container>
			<Container>
				<Carousel
					wrap
					pause={false}
					indicators={false}
					controls={false}
					interval={2500}
				>
					{renderSpecials()}
				</Carousel>
			</Container>
		</>
	);
};
