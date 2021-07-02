import React from "react";

import { Card, Row, Col, Badge } from "react-bootstrap";

interface ItemCardProps {
	title: string;
	desc: string;
	size: string[];
	price: number[];
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
	const { title, desc, size, price } = props;

	const renderPrices = () => {
		const badges = [];
		const md = {
			span: 0,
			offset: 0,
		};

		switch (price.length) {
			case 4:
				md.span = 3;
				break;
			case 3:
				md.span = 4;
				break;
			case 2:
				md.span = 3;
				md.offset = 0;
				break;
			case 1:
				md.span = 4;
				md.offset = 4;
				break;
		}

		for (let i = 0; i < price.length; i++) {
			badges.push(
				<Col md={md}>
					<Badge className="thick white-font" variant="default">
						{size.length > 0 ? size[i] : null}
						{size.length > 0 ? <br /> : null}${price[i]}
					</Badge>
				</Col>
			);
		}

		if (price.length === 2) {
			badges.unshift(<Col md={3} />);
			badges.push(<Col md={3} />);
		}

		return badges;
	};

	return (
		<Card style={{ minHeight: "180px", border: "none" }}>
			<Card.Body className="orange-bg white-font">
				<Card.Title className="thick">{title}</Card.Title>
				<Card.Text style={{ fontSize: 12 }}>{desc}</Card.Text>
			</Card.Body>
			<Card.Footer
				style={{ border: "none" }}
				className="text-muted text-center orange-bg"
			>
				<Row>{renderPrices()}</Row>
			</Card.Footer>
		</Card>
	);
};
