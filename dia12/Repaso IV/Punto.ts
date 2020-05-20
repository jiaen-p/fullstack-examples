export class Punto{
    private x:number
    private y:number
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }
    public toString():string{
        let text = '(' + this.x + ', ' + this.y + ')'
        return text
    }
    public distanciaAlOrigen(x = this.x, y = this.y):number{
        return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
    }
    public calcularDistancia(B:Punto): number{
        let [x,y] = [B.getX(), B.getY()]
        return this.distanciaAlOrigen(this.x-x, this.y-y)
    }
    public getX (): number{
        return this.x
    }
    public setX(x: number){
        this.x = x
    }
    public getY(): number{
        return this.y
    }
    public setY(y: number){
        this.y = y
    }
    public calcularCuadrante(): number{
        let cuadrante: number = 0;
        if (this.x > 0 && this.y > 0){
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y >= 0){
            cuadrante = 2;
        }
            else if(this.x < 0 && this.y < 0){
            cuadrante = 3;
        }
        else{
            cuadrante = 4;
        }
        return cuadrante;
    }
    public masCercano(puntos: Punto[]):Punto{
        let distancias: number[] = [];
        let cercano: number = 0;
        let resultado: number = 0;
        // array de distancias al punto
        for (let i = 0; i < puntos.length; i++){
            distancias.push(this.calcularDistancia(puntos[i]))
        }
        // calcula el minimo del array
        cercano = distancias.reduce((n,m) => Math.min(n,m), Number.POSITIVE_INFINITY);
        // coge la posicion de la distncia mas cercana
        resultado = distancias.indexOf(cercano);
        // devuelve el punto igual a la posicion de la distancia mas cercana
        return puntos[resultado]
    }
}
