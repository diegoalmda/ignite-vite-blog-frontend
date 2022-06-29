import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Almeida"
            content="Novo post para o blog."
          />
          <Post
            author="Outro usuário"
            content="Novo post mais legal do que o primeiro para o blog."
          />
        </main>
      </div>
      
    </div>
  )
}

export default App
