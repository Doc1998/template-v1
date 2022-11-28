
import { 
  Component, 
  NgModule, 
  VERSION, 
  ElementRef,
  ViewChild
} from '@angular/core'

@Component({
selector: 'app-calendly-widget',
template: `
      <div #container class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>
`
})
export class CalendlyWidgetComponent {
  @ViewChild('container') container?: ElementRef;
  Calendly: any;
  
  ngOnInit() {
    this.Calendly.initInlineWidget({
      url: 'https://calendly.com/irelandwebdesigns/15min',
      parentElement: this.container?.nativeElement
    });
  }
}