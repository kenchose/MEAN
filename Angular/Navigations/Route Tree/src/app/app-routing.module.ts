import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/products/details/details.component';
import { BrandComponent } from './components/products/brand/brand.component';
import { CategoryComponent } from './components/products/category/category.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DetailsReviewsComponent } from './components/reviews/details-reviews/details-reviews.component';
import { AuthorComponent } from './components/reviews/author/author.component';
import { AllComponent } from './components/reviews/all/all.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: 'products', component: ProductsComponent, children: [
    {path: 'details/:id', component: DetailsComponent},
    {path: 'brand/:brand', component: BrandComponent},
    {path: 'category/:cat', component: CategoryComponent}
  ]},
  {path: 'reviews', component: ReviewsComponent, children: [
    {path: 'details/:id', component: DetailsReviewsComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path: 'all/:id', component: AllComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
