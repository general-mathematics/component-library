import React from 'react';
import styles from './Product.module.css'; // ✅ Import the CSS module

interface ProductProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
  shortDescription: string;
  producer?: string;
  price?: string;
  status: string;
  imageSrc: string;
  imageAlt: string;
  enquiry?: string;
  isbn?: string;
}
const Product: React.FC<ProductProps> = ({
  children,
  className = '',
  title,
  shortDescription,
  producer,
  price,
  status,
  imageSrc,
  imageAlt,
  enquiry,
  isbn,
}) => {
  return (
    <div className="gridContainer">
      <div
        className={`${styles.productWrapper} ${
          className ? styles[className] : ''
        }`}
      >
        <div className={styles.productImage}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className={styles.productInfoWrapper}>
          <div>
            <h1 className={styles.productTitle}>{title}</h1>
            <h2 className={styles.productProducer}>{producer}</h2>
            <p className={styles.shortDescription}>{shortDescription}</p>
          </div>
          <div>
            <p className={styles.productStatus}>{status}</p>
            {price && <p>{price}</p>}
          </div>
        </div>

        <div className={styles.productMeta}>
          {isbn && <p>{isbn}</p>}
          {enquiry && <p>{enquiry}</p>}
        </div>
        <div className={styles.productContent}>{children}</div>
      </div>
    </div>
  );
};

export default Product;
