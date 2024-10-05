import styles from './Card.module.css'; // Import the CSS module

interface CardProps {
    title?: string;
    content?: string;
}

const Card:React.FC<CardProps> = ({title, content}) => {
    return ( 
        <div className={styles.card}>
            {/* <h2>Card Title: {title}</h2>
            <p>Card Content: {content} </p> */}
            <p>Blue face</p>
        </div>
     );
}
 
export default Card;