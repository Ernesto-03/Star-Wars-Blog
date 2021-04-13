import React, { useContext } from "react";
import "../../styles/home.scss";
import { CharactersCard } from "../component/characters_Card";
import { PlanetsCard } from "../component/planets_Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const changeIconColor = name => {
		const nameBelonging = store.favorites.findIndex(favorite => favorite == name);
		if (nameBelonging === -1) {
			return <i className="far fa-heart" />;
		} else {
			return <i className="fas fa-heart" style={{ color: "yellow" }} />;
		}
	};
	return (
		<div className="container mt-5">
			<div className="row">
				<h1>Personajes</h1>
			</div>
			<CharactersCard icon={changeIconColor} />
			<div className="row mt-5">
				<h1>Planetas</h1>
			</div>
			<PlanetsCard icon={changeIconColor} />
		</div>
	);
};
