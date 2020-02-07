import { Component, OnInit,Inject } from '@angular/core';
import {Photo} from "../shared/Photo";
import {Photoes} from "../shared/Photoes";
import {PhotoService} from "../services/photo.service";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import {HomechangeService} from "../services/homechange.service";
import {Mouseon} from "../animation/app.animation";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',],
  animations:[Mouseon()]
})
export class HomeComponent implements OnInit {

  photo_jan=[];
  photo_feb=[];
  photo_mar=[];
  select=[];

  constructor(
    private photoservice : PhotoService,
    private config : NgbCarouselConfig,
    private messengerService: HomechangeService
  ) {
    config.showNavigationArrows = true;
    config.interval=3000;
  }

  ngOnInit() {

   for (let i=0;i<3;i++){
    this.photo_jan[i]=this.photoservice.getPhoto(this.getRandomInt(9).toString(),"jan");
    this.photo_feb[i]=this.photoservice.getPhoto(this.getRandomInt(15).toString(),"feb");
    this.photo_mar[i]=this.photoservice.getPhoto(this.getRandomInt(4).toString(),"mar");
   }
   for (let j=0;j<12;j++){
     this.select[j]=false;
   }
   this.messageSubscription = this.messengerService.message.subscribe(m => {
       this.home_app=m;
   });
  }

imgselecton(month:string){
  switch (month) {
    case "jan": this.select[0]=true;break;
    case "feb": this.select[1]=true;break;
    case "mar": this.select[2]=true;break;
    case "apr": this.select[3]=true;break;
    case "may": this.select[4]=true;break;
    case "jun": this.select[5]=true;break;
  }

}

imgselectoff(month:string){
  switch (month) {
    case "jan": this.select[0]=false;break;
    case "feb": this.select[1]=false;break;
    case "mar": this.select[2]=false;break;
    case "apr": this.select[3]=false;break;
    case "may": this.select[4]=false;break;
    case "jun": this.select[5]=false;break;
  }
}


home_app:boolean;

private messageSubscription: Subscription;

changehome(value: boolean) {
        this.messengerService.setMessage(value);
    }
getRandomInt(max) {
       return Math.floor(Math.random() * Math.floor(max));
    }

}
