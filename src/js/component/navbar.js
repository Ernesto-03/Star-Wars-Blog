import React, { useContext } from "react";
import { NavDropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-danger mb-1">
			<Link to="/">
				<div className="navbar-brand mr-5 mx-5" href="#">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png"
						width="85"
						height="70"
						className="d-inline-block align-top"
						alt=""
					/>
				</div>
			</Link>
			<DropdownButton variant="info" title={"Favoritos  " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<NavDropdown.Item href=" ">Nothing here!</NavDropdown.Item>
				) : (
					store.favorites.map((favItem, ind) => {
						return (
							<NavDropdown.Item key={ind}>
								{favItem}
								<i
									className="far fa-times-circle"
									onClick={() => {
										actions.deleteFavorite(favItem);
									}}
								/>
							</NavDropdown.Item>
						);
					})
				)}
			</DropdownButton>
		</nav>
	);
};
