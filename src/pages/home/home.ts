import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
 
  }
  connect():void{
    console.log("Conneting with "+ this.ip+ " on port "+this.port);
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let body = {
        ip : this.ip,
        port: this.port
    };
    
    this.http.post('https://some.domain',JSON.stringify(body), {headers:headers})
      .map(res =>res.json())
      .subscribe(data =>{
        console.log(data);
    })

  }

}
