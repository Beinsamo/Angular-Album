import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {HomechangeService} from "./services/homechange.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'album2019';

  home_app:boolean;

  private messageSubscription: Subscription;

  constructor(private messengerService: HomechangeService) { }

  ngOnInit() {
        this.messageSubscription = this.messengerService.message.subscribe(mode => {
            this.home_app=mode;
        });
    }

  changehome(value: boolean) {
          this.messengerService.setMessage(value);
      }
}
