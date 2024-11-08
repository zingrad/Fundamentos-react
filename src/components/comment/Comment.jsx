import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

export function Comment({content,onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/85195379?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Erick Gomes</strong>
                    <time title='05 de Agosto às 19:00' dateTime="08-05-2024 19:00:00">Cerca de 1h Atrás</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar Comentário">
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
