import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/pallomagualter.png"  
                    />
                    <div className={styles.authorInfo}>
                        <strong>Palloma Gualter</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='26 de Agosto de 2024 às 19:36h' dateTime="2024-08-26">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>teste</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repudiandae veritatis quae minima itaque. Suscipit odio ratione vero repudiandae quasi! Similique possimus consequatur maiores blanditiis totam esse. Cumque, ullam magni.</p>
                <p>😝 <a href="">https://github.com/pallomagualter</a></p>
                <p>
                    <a href="">#Rocketseat</a>
                    <a href=""> #React #boracodar</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>


           <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
           </div>
        </article>
    );
}