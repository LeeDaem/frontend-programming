import styles from './TopArticle.module.css';
import react from '../assets/react.svg';

function TopArticle({title, content, imageUrl}){
    return (
        <article>
            <h2>{title}</h2>
            <img src={react}/>
            <img src={imageUrl}/>
            <p className={styles.text}>{content}</p>
        </article>
    )
}

export default TopArticle