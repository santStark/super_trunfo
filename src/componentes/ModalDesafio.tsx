import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/componentes/ModalDesafio.module.css';

export function ModalDesafio(){
    const {proximaPartida, newGame, totalPartidas, cartas, prop} = useContext(GameContext)
    return(
        <div className={styles.modalDesafioContainer}>
            <div className={styles.modalDesafioBlock}>
                <div className={styles.itemCar}>
                    <img src={cartas.user.img} alt={cartas.user.nome}/>
                    <h4>{cartas.user.nome}</h4>
                    <strong>{prop + ': ' +cartas.user[prop]}</strong>
                </div>
                <div className={styles.itemRes}>
                    {
                        cartas.user[prop] > cartas.computer[prop] ?
                            <h2>Você ganhou!</h2>
                        :
                            <h2>Você Perdeu!</h2>
                    }
                    {
                        totalPartidas > 1 ?
                            <button onClick={proximaPartida}>Proximo</button>
                        :
                            <button onClick={newGame}>Novo Jogo</button>
                    }
                </div>
                <div className={styles.itemCar}>
                    <img src={cartas.computer.img} alt={cartas.computer.nome}/>
                    <h4>{cartas.computer.nome}</h4>
                    <strong>{prop + ': ' +cartas.computer[prop]}</strong>
                </div>
            </div>
        </div>
    )
}