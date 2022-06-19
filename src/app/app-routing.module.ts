import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ArticleOneComponent } from "./article-one/article-one.component";
import { ArticleThreeComponent } from "./article-three/article-three.component";
import { ArticleTwoComponent } from "./article-two/article-two.component";
import { ArticlesComponent } from "./articles/articles.component";
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
  { path: "contact", component: ContactComponent, data: {title : 'Contact | Small business Web Development | Ireland Web Designs'}},
  { path: "articles", component: ArticlesComponent, data: {title : 'Articles | Small business Web Development | Ireland Web Designs'}},
  { path: "articles/2022/the-importance-of-seo-for-your-business", component: ArticleOneComponent, data: {title : 'The Importance Of SEO For Your Business | Small business Web Development | Ireland Web Designs'}},
  { path: "articles/2022/wordpress-is-bad-for-SEO-and-customer-experience", component: ArticleTwoComponent, data: {title : 'Wordpress is Bad for SEO and Customer Experience | Small business Web Development | Ireland Web Designs'}},
  { path: "articles/2022/the-ultimate-guide-to-using-a-website-to-boost-your-sales", component: ArticleThreeComponent, data: {title : 'The Ultimate Guide to Using a Website to Boost Your Sales | Small business Web Development | Ireland Web Designs'}}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
