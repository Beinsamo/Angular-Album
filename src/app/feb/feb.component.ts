import { Component, OnInit } from '@angular/core';
import {Photo} from "../shared/Photo";
import {Photoes_Feb} from "../shared/Photoes_Feb"
import {MatDialog,MatDialogRef} from '@angular/material';
import {PhotodetailComponent} from "../photodetail/photodetail.component";

@Component({
  selector: 'app-feb',
  templateUrl: './feb.component.html',
  styleUrls: ['./feb.component.scss']
})
export class FebComponent implements OnInit {

  photoes : Photo[] = Photoes_Feb;

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  getPhotodetail(ph:Photo){
    let id=ph.id;
    let mon=ph.month;
    let dialogRef = this.dialog.open(PhotodetailComponent, {maxWidth: '1000px', maxHeight: '1000px', width : '700px',
    data: {img: id, month: mon}, hasBackdrop: true, autoFocus: true ,position:  { left: '300px', top: '100px' }
   });

 }
}
