import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';
import { Avatar } from "../Avatar/Avatar";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
             src="https://images.unsplash.com/photo-1622675235457-38708d51d6d5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />

            <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/85195379?v=4"/>


                <strong>Erick</strong>
                <span>Front End Junior</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}