import { Header } from "./components/Header/Header";
import {Post} from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/85195379?v=4',
      name: 'Erick',
      role: 'Front End'
    },
    content: [
        {type: 'paragraph', content:  'Opa beleza??',},
        {type: 'paragraph', content:  'Estou estudando React'},
        {type: 'link', content:  '@ErickGomes'},
    ],
    publishedAt: new Date('2024-09-25 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: 'Maike',
      role: 'backend',
    },
    content: [
        {type: 'paragraph', content:  'Fala galeraa 👋',},
        {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz,  no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:  '@mikeBrito'},
    ],
    publishedAt: new Date('2024-09-26 20:00:00'),
  }

];


export function App() {
  return(
  <>
  <Header />
 
    <div className={styles.wrapper}>
       <Sidebar />
        <main>
             {posts.map(post => {
              return( 
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
              )
             })}
        </main>
    </div>
    </>

  );
}


