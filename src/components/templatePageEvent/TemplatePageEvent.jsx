import React from "react";
import styles from "./templatePageEvent.module.css";
import ImageComponentEvent from "./ImageComponentEvent";

const TemplatePageEvent = ({ title, text, images, bandTitle, bandList }) => {
    // Ensure images array has exactly three images
    if (images.length !== 3) {
      console.error('TemplatePageEvent component expects exactly 3 images.');
      return null;
    }
  
    return (
        <div className={styles.container}>
          <h2 className={styles.bandTitle}>{bandTitle}</h2>
          <div className={styles.bandList}>
            {bandList.map((band, index) => (
              <p key={index}>{`${index + 1}. ${band}`}</p>
            ))}
          </div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.text}>{text}</div>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={`${styles.image} ${styles[`image${index + 1}`]}`} />
          ))}
          <button className={styles.button}>Acheter Billet</button>
        </div>
      );
    };
    
    export default TemplatePageEvent;