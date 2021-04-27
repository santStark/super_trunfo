import { Historico } from '../componentes/Historico';
import { Mesa } from '../componentes/Mesa';
import { Placar } from '../componentes/Placar';
import { GameProvider } from '../contexts/GameContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <GameProvider>
      <div className={styles.container}>
        <Placar />
        <Mesa />
        <Historico />
      </div>
    </GameProvider>
  )
}
