import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './container/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { RecipeDetailsComponent } from './container/recipe-details/recipe-details.component';
import { ReviewsComponent } from './container/reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ExplrecipeComponent } from './home-component/explrecipe/explrecipe.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { NotFoundcomponentComponent } from './not-foundcomponent/not-foundcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HeaderComponent,
    ContainerComponent,
    RecipeDetailsComponent,
    ReviewsComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    FooterComponent,
    PrivacypolicyComponent,
    ExplrecipeComponent,
    AddrecipeComponent,
    NotFoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
