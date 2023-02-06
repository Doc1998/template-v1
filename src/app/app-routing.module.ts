import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdOfferComponent } from "./ad-offer/ad-offer.component";
import { ArticleFiveComponent } from "./article-five/article-five.component";
import { ArticleFourWebDesignVsWebDevComponent } from "./article-four-web-design-vs-web-dev/article-four-web-design-vs-web-dev.component";
import { ArticleOneComponent } from "./article-one/article-one.component";
import { ArticleThreeComponent } from "./article-three/article-three.component";
import { ArticleTwoComponent } from "./article-two/article-two.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeCorkComponent } from "./home-cork/home-cork.component";
import { HomeDublinComponent } from "./home-dublin/home-dublin.component";
import { HomeGalwayComponent } from "./home-galway/home-galway.component";
import { HomeLimerickComponent } from "./home-limerick/home-limerick.component";
import { LandingComponent } from "./landing/landing.component";
import { OfferTwoComponent } from "./offer-two/offer-two.component";
import { OfferComponent } from "./offer/offer.component";
import { ProjectsComponent } from "./projects/projects.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { WebDesignStandardComponent } from "./web-design-standard/web-design-standard.component";

const routes: Routes = [
  { path: "home", component: LandingComponent, data: {title : 'Web Design Ireland | Small business Web Development'} },
  { path: "", component: LandingComponent, data: {title : 'Web Design Ireland | Small business Web Development'}  },
  { path: "web-design-ireland", component: LandingComponent, data: {title : 'Web Design Ireland | Small business Web Development'}  },
  { path: "web-design-standard", component: WebDesignStandardComponent, data: {title : 'Web Design Lifetime Support | Web Design Ireland | Small business Web Development'}  },
  { path: "web-design-blog", component: WebDesignStandardComponent, data: {title : 'Web Design Lifetime Support & Blogging | Web Design Ireland | Small business Web Development'}  },
  { path: "web-design-standalone", component: WebDesignStandardComponent, data: {title : 'Standalone Website | Web Design Ireland | Small business Web Development'}  },
  { path: "standard", component: OfferComponent },
  { path: "ecommerce", component: OfferTwoComponent },
  { path: "locations/cork-web-design", component: HomeCorkComponent, data: {title : 'Cork Web Design | Small business Web Development'} },
  { path: "locations/galway-web-design", component: HomeGalwayComponent, data: {title : 'Galway Web Design | Small business Web Development'} },
  { path: "locations/dublin-web-design", component: HomeDublinComponent, data: {title : 'Dublin Web Design | Small business Web Development'} },
  { path: "locations/limerick-web-design", component: HomeLimerickComponent, data: {title : 'Limerick Web Design | Small business Web Development'} },
  { path: "web-design-ireland", component: AboutUsComponent, data: {title : 'About us | Small business Web Development | Ireland Web Designs'} },
  { path: "projects", component: ProjectsComponent,  data: {title : 'Projects | Small business Web Development | Web Design Ireland'}},
  { path: "contact", component: ContactComponent, data: {title : 'Contact | Small business Web Development | Web Design Irelands'}},
  { path: "questionnaire", component: QuestionnaireComponent, data: {title : 'Questionnaire | Small business Web Development | Web Design Irelands'}},
  { path: "articles", component: ArticlesComponent, data: {title : 'Articles | Small business Web Development | Web Design Ireland'}},
  { path: "special-offer", component: WebDesignStandardComponent, data: {title : 'Special Offer | Small business Web Development | Web Design Ireland'}},
  { path: "articles/2022/the-importance-of-seo-for-your-business", component: ArticleOneComponent, data: {title : 'The Importance Of SEO For Your Business | Small business Web Development | Web Design Ireland'}},
  { path: "articles/2022/wordpress-is-bad-for-SEO-and-customer-experience", component: ArticleTwoComponent, data: {title : 'Wordpress is Bad for SEO and Customer Experience | Small business Web Development | Web Design Ireland'}},
  
  { path: "articles/2022/ireland-web-design-vs-web-development-what-is-the-difference", component: ArticleFourWebDesignVsWebDevComponent, data: {title : 'Ireland Web Design vs Web Development | Small business Web Development | Web Design Ireland'}},
  { path: "articles/2022/why-you-should-use-google-analytics-for-your-business", component: ArticleFiveComponent, data: {title : 'Ireland Web Design vs Web Development | Small business Web Development | Web Design Ireland'}}




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
