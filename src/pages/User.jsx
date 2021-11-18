import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVenusMars,
	faEnvelope,
	faPhone,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

function User(user) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};
	return (
		<>
			<div className="d-grid gap-2">
				<Button className="modalBtn" variant="primary" onClick={handleShow}>
					More info
				</Button>
			</div>
			<Modal className="user" show={show} onHide={handleClose} animation={false} centered>
				<Modal.Header className="user__header">
					<Image src={user.user.picture.large} className="user__header__avatar" roundedCircle />
					<Modal.Title className="user__header__title">
						{user.user.name.first} {user.user.name.last}
					</Modal.Title>
					<span className="user__header__text">@{user.user.login.username} </span>
				</Modal.Header>
				<Modal.Body>
					<div className="user__detail">
						<FontAwesomeIcon icon={faVenusMars} className="user__detail__icon" />
						<span className="user__detail__text">Gender : </span>
						<span className="user__detail__info"> {user.user.gender}</span>
					</div>
					<div className="user__detail">
						<FontAwesomeIcon icon={faEnvelope} className="user__detail__icon" />
						<span className="user__detail__text">Email : </span>
						<span className="user__detail__info"> {user.user.email}</span>
					</div>
					<div className="user__detail">
						<FontAwesomeIcon icon={faPhone} className="user__detail__icon" />
						<span className="user__detail__text">Phone : </span>
						<span className="user__detail__info"> {user.user.phone}</span>
					</div>
					<hr />
					<div className="user__address">
						<div className="user__address__header">
							<FontAwesomeIcon icon={faMapMarkedAlt} className="user__detail__icon" />
							<span className="user__detail__text">Location :</span>
						</div>
						<span>
							{user.user.location.street.number} {user.user.location.street.name}
						</span>
						<span>
							{user.user.location.postcode} {user.user.location.city}
						</span>
						<span>{user.user.location.state}</span>
						<span>{user.user.location.country}</span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="user__footerBtn" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default User;
