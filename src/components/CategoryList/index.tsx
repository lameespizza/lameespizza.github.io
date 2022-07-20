import React from "react";
import { CategoryCard } from "../CategoryCard";

import AppetizerIcon from "../../img/appetizer-icon.png";
import ChickenIcon from "../../img/chicken-icon.png";
import PastaSaladIcon from "../../img/pasta-salad-icon.png";
import PizzaIcon from "../../img/pizza-icon.png";
import PlattersIcon from "../../img/platters-icon.png";
import SubsWrapsIcon from "../../img/subs-wraps-icon.png";

import AppetizerBackground from "../../img/appetizer.jpg";
import ChickenBackground from "../../img/chicken.jpg";
import PastaSaladBackground from "../../img/salad.jpg";
import PizzaBackground from "../../img/pizza.jpg";
import PlattersBackground from "../../img/platter.jpg";
import SubsWrapsBackground from "../../img/wraps.jpg";

import { Col, Row, Container, Card } from "react-bootstrap";

export const CategoryList: React.FC<{}> = () => {
	const renderList = () => {
		const list = [];

		const titles = [
			"Pizzas",
			"Appetizers",
			"Chicken",
			"Subs & Wraps",
			"Platters",
			"Pasta & Salads",
		];

		const link = [
			"pizzas",
			"appetizers",
			"chicken",
			"subs-and-wraps",
			"platters",
			"pasta-and-salads",
		];

		const img = [
			PizzaIcon,
			AppetizerIcon,
			ChickenIcon,
			SubsWrapsIcon,
			PlattersIcon,
			PastaSaladIcon,
		];

		const bg = [
			PizzaBackground,
			AppetizerBackground,
			ChickenBackground,
			SubsWrapsBackground,
			PlattersBackground,
			PastaSaladBackground,
		];

		for (let i = 0; i < titles.length; i++) {
			list.push(
				<Col md={3} style={{ marginBottom: "15px" }}>
					<CategoryCard
						img={img[i]}
						link={link[i]}
						bg={bg[i]}
						title={titles[i]}
					/>
				</Col>
			);
		}

		return list;
	};

	return (
		<>
			<Container style={{ marginTop: "25px", marginBottom: "25px" }}>
				<h4 className="thick orange-font">🍽 Categories</h4>
			</Container>

			<Container>
				<Row className="text-center">
					{renderList()}

					<Col
						md={6}
						style={{
							minHeight: "331px",
							maxHeight: "331px",
						}}
					>
						<Card
							style={{
								width: "100%",
								backgroundColor: "#EDF2F5",
								minHeight: "331px",
								maxHeight: "331px",
								border: "none",
							}}
						>
							<Card.Body style={{ backgroundColor: "white" }}>
								<Container
									className="brown-font"
									style={{ marginTop: "110px" }}
								>
									<Row>
										<Col
											style={{ fontSize: "80%" }}
											md={{ span: 8, offset: 2 }}
										>
											<Row>
												<Col className="text-left" md={6}>
													MON - WED
												</Col>

												<Col className="text-right" md={6}>
													11AM - 10PM
												</Col>

												<Col className="text-left" md={6}>
													THURS
												</Col>

												<Col className="text-right" md={6}>
													11AM - 11PM
												</Col>

												<Col className="text-left" md={6}>
													FRI - SAT
												</Col>

												<Col className="text-right" md={6}>
													11AM - 12AM
												</Col>

												<Col className="text-left" md={6}>
													SUN
												</Col>

												<Col className="text-right" md={6}>
													2PM - 9PM
												</Col>
											</Row>
										</Col>
									</Row>
								</Container>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
