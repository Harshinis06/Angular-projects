import { ChangeDetectorRef, Component, DoCheck, EventEmitter, inject, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
// import { Recipies } from 'src/app/Model/Recipies';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
 
})
export class RecipeDetailsComponent implements OnChanges,DoCheck {
  constructor(){
    console.log("recipedetailscompconst");
    console.log("calling vlaue while constructor call:"+this.allRecipe);
    
  }
  ngDoCheck(): void {
    // this.isCardVisible=!this.isCardVisible;

  console.log('isCardVisible:', this.isCardVisible);
    console.log("ngcocheck from recipe details" +this.allRecipe);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("onchange from recipe-details");
  //  console.log("onchange from recipe-details" +this.allRecipe);
  //  console.log(changes['allRecipe'].currentValue);
  //  console.log(changes['allRecipe'].previousValue);
   this.isCardVisible=false;
  // this.toggleClose();
  }

//  ngOnInit(){
//   console.log("ngoninit from recipe-details "+this.allRecipe);
//  }

ngAfterViewChecked(){
  console.log("ngAfterViewChecked" +this.allRecipe);
  
}

  @Input()
  allRecipe:any;
  isCardVisible:boolean=false;

  
   
  toggleClose(){
     this.isCardVisible=true
    //  console.log(data);
    //  console.log(this.allRecipe);
  }

 

//   @Output()
// allReviews:EventEmitter<string>=new EventEmitter();

// constructor(private recipeService:RecipeService){}
//instead of using constructor we can use inject 

recipeService=inject(RecipeService)


// review:any;

reviews(data:any){
//  this.review=data;
 this.recipeService.emitAllReviews(data)
 // this.allReviews.emit(this.review)
//  console.log(data);

  }

  
  @Input()
selectedRecipe:any;


// ngOnChanges(changes: SimpleChanges) {
//   console.log('ngOnChanges in RecipeDetailsComponent');
//   if (changes['allRecipe']) {
//     console.log('Updated Recipe:', changes['allRecipe'].currentValue);
//   }
//   if (changes['selectedRecipe']) {
//     console.log('Updated Search Text:', changes['selectedRecipe'].currentValue);
//   }
// }
}
