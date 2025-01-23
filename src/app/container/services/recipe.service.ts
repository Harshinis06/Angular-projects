import { EventEmitter, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Injectable(
  {
   providedIn: 'root'
}
)
export class RecipeService implements OnChanges{
  
  constructor(){
    console.log("recipeconstservice");
    console.log("calling vlaue while constructor call:"+this.allReviewsEmit);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("services");
   
  }

   allReviewsEmit:EventEmitter<RecipeDetailsComponent>=new EventEmitter();

  // allRecipeReview:any

 emitAllReviews(data: any){
  // this.allRecipeReview=data;
   this.allReviewsEmit.emit(data);
 }


}
