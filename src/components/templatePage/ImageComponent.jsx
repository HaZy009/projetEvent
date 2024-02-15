import React from "react";
import Image from "next/image";
import styles from "./imageComponent.module.css";

const ImageComponent = ({ srcImg = "/festival-contact1.jpg", alt = "music" }) => {
	return (
		<>
			<Image className={styles.image} src={srcImg} alt={alt} fill />
		</>
	);
};

export default ImageComponent;
