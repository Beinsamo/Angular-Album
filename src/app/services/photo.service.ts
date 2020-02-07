import { Injectable } from '@angular/core';
import {Photo} from "../shared/photo";
import {Photoes} from "../shared/photoes";
import {Photoes_Feb} from "../shared/Photoes_Feb";
import {Photoes_Mar  } from "../shared/Photoes_Mar";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getPhoto(id:string, month:string) : Photo {
    if (month=="jan"){
      return Photoes.filter((photo) => photo.id==id )[0];
    }
    else if (month=="feb"){
      return Photoes_Feb.filter((photo) => photo.id==id )[0];
    }
    else if (month=="mar"){
      return Photoes_Mar.filter((photo) => photo.id==id )[0];
    }
  }
}
