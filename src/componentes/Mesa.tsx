import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/componentes/Mesa.module.css';
import { Carta } from './Carta';
import { ModalDesafio } from './ModalDesafio';

export function Mesa() {

    const {isModal, cartas, newGame} = useContext(GameContext);

    return (
        <>
            {
                cartas.user ?(<div className={styles.mesaContainer}>
                    <Carta id="cartaUser" oculta="false" cartaInfo={cartas.user}  />
                    <img src="/logo.png" alt="" />
                    <Carta id="cartaComputer" oculta="true" cartaInfo={cartas.computer}  />
                </div>) :(<div></div>)
            }
            
            { isModal ? (<ModalDesafio/> ): (<span></span>) }
        </>
    )
}