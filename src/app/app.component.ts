import { Component, ElementRef, inject, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { RecipeService } from './container/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  constructor(){
    console.log("appcompconst");
    console.log("calling vlaue while constructor call:"+this.title);
    
  }
  title = 'RecipeManager';

  // @Input()
//   @ViewChild('inputValue') inputVal: ElementRef;
//   searchText:string='All';

 


//   searchTextShow(){
//     this.searchText=this.inputVal.nativeElement.value;
  
//  }

//  ngAfterViewInit(){
//    console.log("ngAfterViewInit" +this.searchText);
//    this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid green');
//  }
 
//  ngAfterViewChecked(){
//   console.log("ngAfterViewChecked" +this.searchText);

//   if (this.searchText.length > 10) {
//     this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid red');
//   } else {
//     this.renderer.setStyle(this.inputVal.nativeElement, 'border', '2px solid green');
//   }
  
// }


}
