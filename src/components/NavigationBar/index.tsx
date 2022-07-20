import React from "react";

import Logo from "../../img/logo.png";

import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

interface NavigationBarProps {
	setShowHiringModal: (show: boolean) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = (props) => {
	const { setShowHiringModal } = props;

	return (
		<Navbar
			style={{
				justifyContent: "space-around",
				boxShadow: "0px 2px 5px #CDCDCD",
			}}
		>
			<Navbar.Brand className="bold">
				<Link to={"/"}>
					<img
						src={Logo}
						height="50"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
						draggable={false}
					/>
				</Link>
			</Navbar.Brand>
			<Nav>
				<Nav.Link href="https://www.facebook.com/LameesPizza/" target="_blank">
					<FontAwesomeIcon color={"#3f220f"} icon={faFacebook} />
				</Nav.Link>

				<Nav.Link
					onClick={() => setShowHiringModal(true)}
					style={{ marginLeft: "25px" }}
				>
					<span className="thick orange-font">We're Hiring!</span>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};
