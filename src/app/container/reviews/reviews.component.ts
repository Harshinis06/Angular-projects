import { Component, inject, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
constructor(){
  console.log("reviewcompconst");
  console.log("calling vlaue while constructor call:"+this.receivReviews);
  
}
 
  receivReviews:any;

  // constructor(private recipeService:RecipeService){}
  recipeService=inject(RecipeService);
  subscription: any=Subscription;

  ngOnInit(){
    this.recipeService.allReviewsEmit.subscribe((data)=>{
      this.receivReviews=data;
      this.isReviewVisible = false;
      console.log("ngonInit from receivereviews"+this.receivReviews);
      
    })
  } 
 
  
  isReviewVisible:boolean=false;
  closeMarks(){
      this.isReviewVisible=true;
  }

   ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed from reviews.');
    }
  }
  // ngAfterContentInit(){
  //   console.log("the ng-content is initialized");
  // }
  
}

