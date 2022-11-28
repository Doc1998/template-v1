import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { AcheivmentsComponent } from './acheivments/acheivments.component';
import { BookingComponent } from './booking/booking.component';
import { CalendlyWidgetComponent } from './calendly-widget/calendly-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ServicesComponent,
    CtaComponent,
    FooterComponent,
    AboutComponent,
    AboutUsComponent,
    ReviewsComponent,
    ProjectsComponent,
    ContactComponent,
    ProcessComponent,
    LeadFormComponent,
    AcheivmentsComponent,
    BookingComponent,
    CalendlyWidgetComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
