import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/componentes/Historico.module.css';

export function Historico() {
    const { historico } = useContext(GameContext)
    return (
        <div className={styles.historicoContainer}>
            {

                historico.map((item,index) => {

                    return (
                        <div className={styles.historicoDesafioBlock} key={index}>
                            <h2>#{index + 1}</h2>
                            <div className={styles.itemCar}>
                                <img src={item.cartas.user.img} alt={item.cartas.user.nome} />
                                <div>
                                    <h4>{item.cartas.user.nome}</h4>
                                    <strong>{item.prop + ': ' + item.cartas.user[item.prop]}</strong>
                                </div>
                            </div>
                            <div className={styles.itemRes}>
                                
                                {item.res}
                                
                            </div>
                            <div className={styles.itemCar}>
                                <img src={item.cartas.computer.img} alt={item.cartas.computer.nome} />
                                <div>
                                    <h4>{item.cartas.computer.nome}</h4>
                                    <strong>{item.prop + ': ' + item.cartas.computer[item.prop]}</strong>
                                </div>
                            </div>

                        </div>
                    )

                })

            }
        </div>
    )
}