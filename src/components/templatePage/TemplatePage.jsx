import React from "react";
import styles from "./templatePage.module.css";
import ImageComponent from "./ImageComponent";

const TemplatePage = ({
	title,
	description,
	
	src = "/festival-contact-1.jpg",
	altImg = "test",
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				
			</div>
			<div className={styles.imgContainer}>
				<ImageComponent srcImg={src} alt={altImg} />
			</div>
		</div>
	);
};

export default TemplatePage;
