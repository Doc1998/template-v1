import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  colorHeader:boolean = false;
  showDropDown:boolean = false;
  phoneView:boolean = true
  constructor() { }

  ngOnInit(): void {

  }

 dropDownMenu(target: HTMLElement){
    this.showDropDown = !this.showDropDown;
    if(target.classList.contains('clicked')){
      console.log('yes')
      target.classList.remove('clicked');
    } else{
      console.log('no')
      target.classList.add('clicked');
    }
 }

}
