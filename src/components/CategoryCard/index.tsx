import React from "react";

import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

interface CategoryCardProps {
	img: string;
	link: string;
	bg: string;
	title: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
	const { img, link, bg, title } = props;

	return (
		<Link to={"/" + link}>
			<Card
				style={{
					width: "100%",
					border: "none",
					backgroundImage: "url(" + bg + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<Card.Img variant="top" src={img} draggable={false} />
				<Card.Body>
					<Card.Title className="text-center thick white-font">
						{title}
					</Card.Title>
				</Card.Body>
			</Card>
		</Link>
	);
};
