import { Component, OnInit,Inject } from '@angular/core';
import {Photo} from "../shared/Photo";
import {Photoes} from "../shared/Photoes";
import {PhotoService} from "../services/photo.service";
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.scss']
})
export class PhotodetailComponent implements OnInit {

  photo : Photo ;

  constructor(
    private photoservice : PhotoService,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    public dialogRef: MatDialogRef<PhotodetailComponent>
  ) { }

  ngOnInit() {
    this.photo=this.photoservice.getPhoto(this.data.img, this.data.month);

  }

  closeDialog() {
    this.dialogRef.close();
  }



}
