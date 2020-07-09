import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public promissLongitud:number = null
  public promissLatidud:number = null
  public observableLongitud:number = null
  public observableLatitud:number = null
  constructor(private geo:Geolocation) {}

  public getPromiss():void{
    this.geo.getCurrentPosition()
    .then(res => {
      this.promissLatidud = res.coords.latitude
      this.promissLongitud = res.coords.longitude
    })
    .catch(err => console.log(err))
  }

  public getObservable():void{
    this.geo.watchPosition().subscribe(data => {
      this.observableLatitud = data.coords.latitude
      this.observableLongitud = data.coords.longitude
    })
  }
}
