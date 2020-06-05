import { Serie } from "./Serie";
import { Libro } from "./Libro";

export interface Entregable{
    prestado: boolean;
    entregar():void;
    devolver():void;
    isEntregado():boolean;
    compareTo(a: Object ):number;
}