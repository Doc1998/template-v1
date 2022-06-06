import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingComponent } from "./landing/landing.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReviewsComponent } from "./reviews/reviews.component";

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "", component: LandingComponent },
  { path: "about-us", component: AboutUsComponent, data: {title : 'About us | Small business Web Development | Ireland Web Designs'} },
  { path: "reviews", component: ReviewsComponent, data: {title : 'Reviews | Small business Web Development | Ireland Web Designs'}},
  { path: "projects", component: ProjectsComponent,  data: {title : 'Projects | Small business Web Development | Ireland Web Designs'}},
  { path: "contact", component: ContactComponent, data: {title : 'Contact | Small business Web Development | Ireland Web Designs'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
