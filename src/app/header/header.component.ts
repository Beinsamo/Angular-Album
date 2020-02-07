import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeSelect(selectele:any){
    if(selectele.className.indexOf("active") >= 0){
        selectele.setAttribute("class","nav-link active");
    }
    else{
      let links=document.getElementsByTagName("a");
      for(let i=0;i<links.length;i++){
        if (links[i].className.indexOf("active") >= 0){
          links[i].setAttribute("class","nav-link");
          links[i].setAttribute("aria-selected","true");
        }
      }
      selectele.setAttribute("class","nav-link active");
      selectele.setAttribute("aria-selected","true");
    }

  }

}
