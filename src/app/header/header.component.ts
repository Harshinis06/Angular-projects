import { HtmlParser } from '@angular/compiler';
import { Component, ContentChildren, ElementRef, inject, OnChanges, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../container/services/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  constructor(private render:Renderer2){
    console.log("headercomp");
    // console.log("calling vlaue while constructor call:"+this.searchText);
    
  }
 
  // searchText:string="";

  // searchTextChange(event ){
  //   this.searchText=event.target.value;
  //   console.log(this.searchText);
    
  // }


  // searchTextShow(data:HTMLInputElement){
  //    this.searchText=data.value
  // }
  ngOnChanges(){
    console.log("onchange from HeaderComponent");
     
   }
  
   @ContentChildren('img') projectedContent: QueryList<ElementRef>;

   ngAfterContentInit() {
    
    this.projectedContent.forEach((item) => {
    
      this.render.setStyle(item.nativeElement, 'width', '10rem');
      this.render.setStyle(item.nativeElement, 'height', '12rem');
      this.render.setStyle(item.nativeElement, 'border', '1px solid black');
      this.render.setStyle(item.nativeElement, 'border-radius', '100%');
      this.render.setStyle(item.nativeElement, 'margin-left', '1rem');
      console.log(item);
      
    });
  }

   ngDoCheck(){
      console.log("ngDoCheck" +this.projectedContent);      
   }
 
  


}
