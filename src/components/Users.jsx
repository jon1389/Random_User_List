import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Axios from "axios";
import User from "../pages/User";

export default function Profile() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		Axios.get("https://randomuser.me/api/?results=10")
			.then((response) => {
				setUsers(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const displayUsers = users.map((user, key) => {
		return (
			<Container className="profile" key={key}>
				<div className="profile__header">
					<Image src={user.picture.medium} className="profile__header__avatar" roundedCircle />
					<div>
						<span className="profile__header__name">
							{user.name.first} {user.name.last}
						</span>
					</div>
					<div>
						<span className="profile__header__text">@{user.login.username} </span>
					</div>
				</div>
				<hr />
				<User user={user} />
			</Container>
		);
	});

	return <Container className="cards">{displayUsers}</Container>;
}
