import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BookingComponent } from "./booking/booking.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingComponent } from "./landing/landing.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReviewsComponent } from "./reviews/reviews.component";

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "", component: LandingComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: AboutUsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
