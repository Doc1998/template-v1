import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  scrWidth = window.innerWidth;
  phoneView:boolean = true
  constructor() { }
  
  @HostListener('window:resize')
  getScreenSize() {
        this.scrWidth = window.innerWidth;
        if(this.scrWidth > 1024){
         this.phoneView = false;
       }else{
         this.phoneView = true;
       }
        console.log(this.scrWidth);
  }

  ngOnInit(): void {
  }

}
