import React from "react";
import styles from "./card.module.css";

const Card = ({
	src ,
	alt = "artist",
	description,
	textButton = "Voir Plus",
	isProfile,
}) => {
	return (
		<div className={styles.cardContainer}>
			{isProfile ? (
				<img className={styles.avatar} src={src} alt={alt} />
			) : (
				<img className={styles.cardImg} src={src} alt={alt} />
			)}

			<p className={styles.cardDescription}>{description}</p>
			<button className={styles.cardButton}>{textButton}</button>
		</div>
	);
};

export default Card;
