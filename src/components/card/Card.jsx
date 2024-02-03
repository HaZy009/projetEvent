import React from "react";
import styles from "./card.module.css";

const Card = ({
	src = "/artist.jpg",
	alt = "artist",
	title,
	description,
	textButton = "Read More",
	isProfile,
}) => {
	return (
		<div className={styles.cardContainer}>
			{isProfile ? (
				<img className={styles.avatar} src={src} alt={alt} />
			) : (
				<img className={styles.cardImg} src={src} alt={alt} />
			)}

			<h1 className={styles.cardTitle}>{title}</h1>
			<p className={styles.cardDescription}>{description}</p>
			<button className={styles.cardButton}>{textButton}</button>
		</div>
	);
};

export default Card;
