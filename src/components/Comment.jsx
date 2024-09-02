import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/pallomagualter.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Palloma Gualter</strong>
                            <time title='30 de Agosto de 2024 às 12:07h' dateTime="2024-08-26">Cerca de 1min atrás</time>
                        </div>

                        <button title='Deletar comentário' >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}