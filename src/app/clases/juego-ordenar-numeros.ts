import { NumberLiteralType } from "typescript";
import { Juego } from "./juego";

export class JuegoOrdenarNumeros extends Juego{
    
    numeroUno:number;
    numeroDos:number;
    numeroTres:number;
    numeroCuatro:number;
    public resultado : string;

    constructor(Gano?:boolean, jugador?:string){
        super("Ordenar números", Gano, jugador);
    }

    verOrden(orden)
    {
        for (let i = 1; i < orden.length; i++) {
            if(orden[i] >= orden[i-1]){}
            else
            {
                return 'Perdió';
            }
        }
        return 'Ganó';
    }

    verificar()
    {

    }
}
