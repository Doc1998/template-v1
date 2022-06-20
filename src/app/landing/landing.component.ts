import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  colorHeader:boolean = false;
  showDropDown:boolean = false;
  scrWidth = window.innerWidth;
  phoneView:boolean = true
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Small Business Web Design + Development · No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at €150/mo.' },
      { name: 'keywords', content:"small business web designer ireland, small business web developer ireland, web developer near me ireland, affordable web design ireland, affordable business website ireland, web design agency ireland, affordable web design agency for small businesses, custom web development ireland, web design ageency, web design services ireland, website designing compnay ireland" },
      {name:'og:title',content:"Small Business Web Design + Development"},
      {name:'og:description',content:"We offer 100% hand-coded websites with superior results starting at €150/mo."},
      {name:'og:type',content:"website"},
      {name:'og:url',content:"https://www.irishwebdesigns.ie/"},
      {name:'og:image',content:"https://i.imgur.com/OIBVsSw.png"},
      {name:'og:image:secureurl',content:"https://i.imgur.com/OIBVsSw.png"},
    ]); 
    if(this.scrWidth > 1024){
      this.phoneView = false;
    }
  }
  @HostListener('window:scroll',['$event']) onScroll(){
    if(!this.phoneView){
      if(window.scrollY > 100){
        this.colorHeader = true;
      }else{
        this.colorHeader = false;
      }
    }
 }
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
  scroll(el: HTMLElement){
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    console.log('clicked')
}
}
