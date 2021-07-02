import React from "react";

import Logo from "../../img/logo.png";

import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar: React.FC<{}> = () => {
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
			{/* <Nav> */}
			{/* <Nav.Link
					href="#link"
					style={{ paddingLeft: "100px", paddingRight: "100px" }}
				>
					Menu
				</Nav.Link> */}
			{/* <Nav.Link href="#link">About</Nav.Link> */}
			{/* </Nav> */}
		</Navbar>
	);
};
