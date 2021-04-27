import { createContext, useEffect, useState } from "react";
import cartasJson from '../../carros.json';

interface IPropCarros {
    nome: string,
    img: string,
    velocidade:number,
    forca:number,
    peso:number

}

interface IDarCartas{
    user:IPropCarros,
    computer:IPropCarros
}

interface IHistorico{
    cartas:IDarCartas,
    prop:string,
    res:string,
}

interface IContext{
    cartas:IDarCartas,
    pontosUser:number,
    pontosComputer:number,
    isModal:boolean,
    totalPartidas:number,
    prop:string,
    historico:IHistorico[],
    darCartas: () => void,
    proximaPartida:() => void,
    newGame:() => void,
    goToModal: (p:boolean) => void,
    changePropriedade:(p:string) => void;

}

export const GameContext = createContext({} as IContext);

export function GameProvider( {  children,  ...rest  }) {

    const [cartasUserIniciais, setCartasUserIniciais] = useState([]);
    const [cartasComputerIniciais, setCartasComputerIniciais] = useState([]);

    const [cartasUser, setCartasUser] = useState([]);
    const [cartasComputer, setCartasComputer] = useState([]);

    const [pontosUser, setPontosUser] = useState(0);
    const [pontosComputer, setPontosComputer] = useState(0);

    const [historico, setHistorico] = useState([]);

    const [cartas, setCartas] = useState({} as IDarCartas);

    const [isModal, setIsModal] = useState(false);

    const [totalPartidas, setTotalPartidas] = useState(0);

    const [prop, setProp] = useState('');

    function distribuirCartas(){

        const arrayPos = []
        for(let i = 0; i < cartasJson.length ; i++){
            arrayPos.push(i);
        }

        const sortArray = arrayPos.sort(() =>  .5 - Math.random());
        const cUser = sortArray.splice(0,cartasJson.length/2);
        const cComp = sortArray;
        
        setCartasUser(cComp);  
        setCartasComputer(cUser);

        setCartasUserIniciais(cComp);
        setCartasComputerIniciais(cUser);
        
    }

    function darCartas(){

        const obj:IDarCartas = {user:undefined, computer:undefined} ;
        obj.user = cartasJson[cartasUser[0]];
        obj.computer = cartasJson[cartasComputer[0]];

        setCartas(obj);
        setIsModal(false);

    }

    function addHistorico(){

        const obj = {} as IHistorico;
        obj.cartas = cartas;
        obj.prop = prop,
        obj.res = cartas.user[prop] > cartas.computer[prop] ? 'Você ganhou!' : 'Você perdeu!';

        const array = [...historico, ...[obj]];
        setHistorico(array);

    }

    function proximaPartida(){

        if(cartasUser.length > 0){

            addHistorico();
            cartasUser.splice(0,1);
            cartasComputer.splice(0,1);

            setCartasUser(cartasUser);
            setCartasComputer(cartasComputer);
            darCartas();

        }

        setTotalPartidas(cartasUser.length);

    }

    function newGame(){

        distribuirCartas();
    }

    function newGame2(){

        setPontosComputer(0);
        setPontosUser(0);
        setHistorico([]);
        setTotalPartidas(Math.floor(cartasJson.length / 2));
        darCartas();
    }

    function goToModal(p:boolean){
        setIsModal(p);
    }

    function changePropriedade(p:string){

        const u = cartas.user[p];
        const c = cartas.computer[p];

        if(u > c){
            setPontosUser(pontosUser + 1);
        }else{
            setPontosComputer(pontosComputer + 1);
        }

        setProp(p);
        setIsModal(true);

    }

    useEffect(()=>{

        newGame();
   
    },[]);

    useEffect(()=>{
        
        newGame2();
   
    },[cartasComputerIniciais]);

    return (

        <GameContext.Provider value={
            { 
                cartas,
                pontosUser,
                pontosComputer,
                isModal,
                totalPartidas,
                prop,
                historico,
                darCartas,
                proximaPartida,
                newGame,
                goToModal,
                changePropriedade,
            }
        }>
            {children}
        </GameContext.Provider>
    );
}