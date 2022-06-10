import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  scrWidth = window.innerWidth;

  constructor() { }
  
  @HostListener('window:resize')
   getScreenSize() {
        this.scrWidth = window.innerWidth;
        if(this.scrWidth > 1024){
         return this.phoneView = false;
       }else{
        return this.phoneView = true;
       }
  }
  phoneView:boolean = this.getScreenSize();

  ngOnInit(): void {
    this.getScreenSize();
  }

}
