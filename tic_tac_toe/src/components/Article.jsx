import styles from './Article.module.css'

function Article({title, content}) {
    return (
        <article>
            <h2>{title}</h2>
            <p className={styles.text}>{content}</p>
        </article>
    )
}
export default Article