import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

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
  }

}
