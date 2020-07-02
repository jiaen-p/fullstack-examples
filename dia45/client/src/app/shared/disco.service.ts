import { Injectable } from '@angular/core';
import { Disco } from '../models/disco';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  public disco: Disco
  private url = 'http://localhost:4000/discos'
  constructor(public http:HttpClient) { }
  obtenerDiscos(){
    return this.http.get(this.url)
  }
  obtenerDisco(id:string){
    return this.http.get(this.url + '/' + id)
  }
  añadirDisco(disco:Disco){
    return this.http.post(this.url, disco)
  }
  actualizarDisco(disco:Disco){
    return this.http.put(this.url, disco)
  }
  borrarDisco(id:string){
    return this.http.request("delete",this.url, {body: {"_id":id}})
    // usar metodo request de http para poder mandar body con metodo delete, no se puede mandar body con el metodo delete
  }
}
