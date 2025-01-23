import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { RouterModule } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ExplrecipeComponent } from './home-component/explrecipe/explrecipe.component';
import { NotFoundcomponentComponent } from './not-foundcomponent/not-foundcomponent.component';

const routes=[
  {path:'',component:HomeComponentComponent},
  {path:'home',component:HomeComponentComponent,
    // children:[
    //   {path:'explrecipe',component:ExplrecipeComponent}
    // ]
  },
  {path:'about',component:  AboutComponentComponent},
  {path:'privacy-policy' ,component:PrivacypolicyComponent},
  {path:'home/explrecipe',component:ExplrecipeComponent},
  {path:'**',component:NotFoundcomponentComponent}
]


@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
