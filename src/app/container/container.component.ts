import { Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewChild } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
// import { Recipies } from '../Model/Recipies';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  constructor(private renderer: Renderer2){
    console.log("containercomp");
    console.log("calling vlaue while constructor call:"+this.recipeDetail);
    
  }
 
  recipeDetail: any;

  recipeDetails(event: any){
   this.recipeDetail=event
  //  console.log(this.recipeDetail);
   
  }
  ngOnchanges(){
console.log("ngoninit fron the container component" +this.recipeDetail);

  }

  // constructor(private renderer: Renderer2){
  //   console.log("appcompconst");
  //   console.log("calling vlaue while constructor call:"+this.title);
  // }

  title = 'RecipeManager';

 
  selectedRecipes:string;



  @ViewChild('inputValue') inputVal: ElementRef;
  searchText:string='All';


  searchTextShow(){
    this.searchText=this.inputVal.nativeElement.value;
    this.selectedRecipes=this.searchText;
 }



 ngAfterViewInit(){
   console.log("ngAfterViewInit" +this.searchText);
   this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid green');
 }
 
 ngAfterViewChecked(){
  console.log("ngAfterViewChecked" +this.searchText);

  if (this.searchText.length > 10) {
    this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid red');
  } else {
    this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid green');
  }
  
}


}
