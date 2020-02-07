import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HomechangeService {

  constructor() { }


  private messageSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public message = this.messageSource.asObservable();

  public setMessage(value: boolean) {
        this.messageSource.next(value);
    }

}
