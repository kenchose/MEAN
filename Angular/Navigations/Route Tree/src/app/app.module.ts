import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/products/details/details.component';
import { BrandComponent } from './components/products/brand/brand.component';
import { CategoryComponent } from './components/products/category/category.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DetailsReviewsComponent } from './components/reviews/details-reviews/details-reviews.component';
import { AuthorComponent } from './components/reviews/author/author.component';
import { AllComponent } from './components/reviews/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    ReviewsComponent,
    DetailsReviewsComponent,
    AuthorComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
