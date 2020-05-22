import { Lavadora } from './Lavadora'
import { Television } from './Television'
import { Electrodomestico } from './Electrodomestico'

let e1 = new Electrodomestico("A","azul", 2000, 130)

let l1 = new Lavadora(15,"A","azul",140, 60)
let l2 = new Lavadora(50,"B","verde", 120, 80)
let l3 = new Lavadora(25, "C", "negro", 90, 45)
let l4 = new Lavadora(80,"D", "", 180, 80)
let l5 = new Lavadora(60, "E", "rojo",)

let t1 = new Television(30, true)
let t2 = new Television(45, false)
let t3 = new Television(60, true)
let t4 = new Television(10, true, "","",200,30)
let t5 = new Television(100,true,"","azul",800, 50)

let elec:Electrodomestico[] = [l1,l2,l3,l4,l5,t1,t2,e1,t4,t5]
let [t_elec, t_tele, t_lava] = [0,0,0]
elec.forEach(el => {
    if(el instanceof Television){
        t_tele += el.precioFinal()
    } else if (el instanceof Lavadora){
        t_lava += el.precioFinal()
    } else {
        t_elec += Electrodomestico.PrecioElectrodomestico(el)
    }
})

console.log(`
    Precio de todas las teles: ${t_tele}
    Precio de todas las lavadoras: ${t_lava}
    Precio total de los electrodomesticos: ${t_elec + t_lava + t_tele}
`)