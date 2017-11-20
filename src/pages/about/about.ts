import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  response: Observable<any>;

  constructor(public navCtrl: NavController,  public http: Http) {

  }
 
 select():void{
    console.log("Select");
    this.response = this.http.get("http://192.168.0.33:40314/select");
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
 }

 start():void{
    console.log("Start");
    this.response = this.http.get();
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
 }
  pressedLeft():void{
    console.log("<-");
    this.response = this.http.get( "http://192.168.0.33:40314/left");
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedRight():void{
    console.log("->");
    this.response = this.http.get( "http://192.168.0.33:40314/right");
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
   }
  pressedUp():void{
    console.log("^");
    this.response = this.http.get( "http://192.168.0.33:40314/up");
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  pressedDown():void{
    console.log("v");
    this.response = this.http.get("http://192.168.0.33:40314/down");
    //console.log(this.response);
    this.response
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })
    
  
  }
  
  }


