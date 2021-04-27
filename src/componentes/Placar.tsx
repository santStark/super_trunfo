import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/componentes/Placar.module.css';

export function Placar(){

    const {pontosComputer,pontosUser} = useContext(GameContext);
    return(
        <div className={styles.placarContainer}>
            <div className={styles.player}>
                <img src="https://github.com/santStark.png" alt="Guilherme Santiago"/>
                <strong>Guilherme</strong>
            </div>
            <div className={styles.placar}>
                <strong>{pontosUser}</strong>
                <span>VS</span>
                <strong>{pontosComputer}</strong>
            </div>
            <div className={styles.player}>
                <strong>Computer</strong>
                <img src="/computer.jpeg" alt="Computer"/>
            </div>
        </div>
    )
}