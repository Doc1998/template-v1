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
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { PricingComponent } from './pricing/pricing.component';
import { Meta } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleOneComponent } from './article-one/article-one.component';
import { ArticleTwoComponent } from './article-two/article-two.component';
import { ArticleThreeComponent } from './article-three/article-three.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeDublinComponent } from './home-dublin/home-dublin.component';
import { HomeCorkComponent } from './home-cork/home-cork.component';
import { HomeLimerickComponent } from './home-limerick/home-limerick.component';
import { HomeGalwayComponent } from './home-galway/home-galway.component';
import { OfferComponent } from './offer/offer.component';
import { OfferTwoComponent } from './offer-two/offer-two.component';
import { AdOfferComponent } from './ad-offer/ad-offer.component';
import { VideoLayerComponent } from './video-layer/video-layer.component';
import { ArticleFourWebDesignVsWebDevComponent } from './article-four-web-design-vs-web-dev/article-four-web-design-vs-web-dev.component';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';
import { WebDesignStandardComponent } from './web-design-standard/web-design-standard.component';
import { WebDesignBlogComponent } from './web-design-blog/web-design-blog.component';
import { WebsiteStandaloneComponent } from './website-standalone/website-standalone.component';  

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
    HomeheaderComponent,
    PricingComponent,
    PortfolioComponent,
    BlogComponent,
    ArticlesComponent,
    ArticleOneComponent,
    ArticleTwoComponent,
    ArticleThreeComponent,
    SidebarComponent,
    AboutMeComponent,
    HomeDublinComponent,
    HomeCorkComponent,
    HomeLimerickComponent,
    HomeGalwayComponent,
    OfferComponent,
    OfferTwoComponent,
    AdOfferComponent,
    VideoLayerComponent,
    ArticleFourWebDesignVsWebDevComponent,
    FeaturedArticleComponent,
    WebDesignStandardComponent,
    WebDesignBlogComponent,
    WebsiteStandaloneComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
