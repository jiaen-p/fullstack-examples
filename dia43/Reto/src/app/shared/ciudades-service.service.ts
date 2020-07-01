import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesServiceService {
  public ciudades: Ciudad[] = []
  constructor() { }
  public getAll(): Ciudad[]{
    return this.ciudades
  }
  public getOne(code: string):Ciudad{
    return this.ciudades.find(({ codigo }) => codigo === code)
  }

  public add(ciudad: Ciudad):boolean{
    return this.ciudades.length !== this.ciudades.push(ciudad)
  }

  public edit(code:string, ciudad: Ciudad):boolean{
    let i = this.ciudades.findIndex(({ codigo }) => codigo === code)
    return this.ciudades.splice(i, 1, ciudad) !== []
  }

  public delete(code:string): boolean{
    let i = this.ciudades.findIndex(({ codigo }) => codigo === code)
    let res = false
    if( i >= 0){
      res = this.ciudades.splice(i,1) !== null
    }
    return res
  }
}
