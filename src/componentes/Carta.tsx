import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/componentes/Carta.module.css';

interface IPropsCartas {
    id: string,
    oculta: string 
    cartaInfo: IPropCarros,
}

interface IPropCarros {
    nome: string,
    img: string,
    velocidade:number,
    forca:number,
    peso:number
}

export function Carta(prop: IPropsCartas) {

    const {changePropriedade} = useContext(GameContext);

    function clickOpt(e){

        const el = e.currentTarget;
        const prop = el.getAttribute('data-prop');
        changePropriedade(prop);
    }

    return (
        <div className={styles.cartaContainer} id={prop.id}>
            {
                prop.oculta === 'false' ? (
                    <>
                        <img src={prop.cartaInfo.img} alt="" />
                        <div>
                            <h3>{prop.cartaInfo.nome}</h3>
                            <div className={styles.cartaRadiosContainer}>
                                <label data-prop="velocidade" onClick={clickOpt} >Velo.: {prop.cartaInfo.velocidade} km/h</label>
                            </div>
                            <div className={styles.cartaRadiosContainer}>
                                <label data-prop="peso" onClick={clickOpt}>Peso: {prop.cartaInfo.peso} kg</label>
                            </div>
                            <div className={styles.cartaRadiosContainer}>
                                <label data-prop="forca" onClick={clickOpt}>Força: {prop.cartaInfo.forca} cv</label>
                            </div>
                            
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.imgOculta}></div>
                        <div>
                            <h3 className={styles.nameOculta}>Oculta</h3>
                            <label className={styles.labelOCulto}>Velocidade</label>
                            <label className={styles.labelOCulto}>Velocidade</label>
                            <label className={styles.labelOCulto}>Velocidade</label>
                        </div>
                    </>
                )}

        </div>
    )
}