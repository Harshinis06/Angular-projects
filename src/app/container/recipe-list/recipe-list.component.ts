import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
// import { Recipies } from '../../Model/Recipies';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
  constructor(){
    console.log("recipelistcompconst");
    console.log("calling vlaue while constructor call:"+this.Recipe);
    
  }

  // allRecipies: Recipies;

  ngOnChanges(){
    console.log("onchange from recipe-list");
     
   }
ngOnInit(){
  console.log("ngoninit from recipe list" +this.Recipe);
  
}

Recipe=[
  {
    "name": "Pasta Primavera",
    "description": "A vibrant pasta dish filled with fresh vegetables, perfect for a light, healthy meal.",
     "imgURL":"../../../assets/images/Pasta.webp",
    "ingredients": [
      "200g Penne Pasta",
      "1 cup Cherry Tomatoes",
      "1 cup Bell Peppers (red, yellow)",
      "1 zucchini, sliced",
      "1 tablespoon Olive Oil",
      "2 cloves Garlic, minced",
      "Salt and Pepper",
      "Fresh Basil"
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "10 minutes",
    "servingSize": "4",
    "difficultyLevel": "Easy",
    "cuisineType": "Italian",
    "category": "Dinner",
    "rating": 4.8,
    "reviews": [
      {
        "username": "Alice Johnson",
        "rating": 5,
        "comment": "So fresh and tasty! A perfect summer dish."
      },
      {
        "username": "Mark Lee",
        "rating": 4,
        "comment": "Loved the flavors, but could use a bit more garlic."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Cook the pasta according to package instructions.",
        "imageUrl": "https://example.com/step1-pasta.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Heat olive oil in a pan and sauté garlic until fragrant.",
        "imageUrl": "https://example.com/step2-pasta.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Add the vegetables and cook for 5-7 minutes.",
        "imageUrl": "https://example.com/step3-pasta.jpg"
      },
      {
        "stepNumber": 4,
        "instruction": "Combine cooked pasta with vegetables and season with salt and pepper.",
        "imageUrl": "https://example.com/step4-pasta.jpg"
      }
    ],
    "tags": ["vegetarian", "healthy", "quick"],
   
  },

  {
    "name": "Chicken Alfredo",
    "description": "Creamy and indulgent pasta dish made with tender chicken, a rich Alfredo sauce, and fettuccine pasta.",
    "imgURL":"../../../assets/images/Chicken Alf.webp",
    "ingredients": [
      "2 Chicken Breasts",
      "200g Fettuccine Pasta",
      "1 cup Heavy Cream",
      "1 cup Parmesan Cheese",
      "2 tablespoons Butter",
      "2 cloves Garlic, minced",
      "Salt and Pepper",
      "Fresh Parsley"
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "20 minutes",
    "servingSize": "4",
    "difficultyLevel": "Medium",
    "cuisineType": "Italian",
    "category": "Dinner",
    "rating": 4.6,
    "reviews": [
      {
        "username": "Sophia Brown",
        "rating": 5,
        "comment": "Rich and creamy, one of the best Alfredo recipes!"
      },
      {
        "username": "David Green",
        "rating": 4,
        "comment": "Great taste, but a little too heavy for me."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Cook the fettuccine pasta as per package instructions.",
        "imageUrl": "https://example.com/step1-alfredo.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Cook chicken breasts in a pan, season with salt and pepper, and slice.",
        "imageUrl": "https://example.com/step2-alfredo.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Make the Alfredo sauce by combining butter, garlic, and cream. Stir in Parmesan until smooth.",
        "imageUrl": "https://example.com/step3-alfredo.jpg"
      },
      {
        "stepNumber": 4,
        "instruction": "Toss pasta with the sauce, add chicken slices, and garnish with parsley.",
        "imageUrl": "https://example.com/step4-alfredo.jpg"
      }
    ],
    "tags": ["creamy", "comfort food", "chicken"]
  },
  {
    "name": "Vegetable Stir-Fry",
    "description": "A healthy and colorful stir-fry with fresh vegetables, perfect for a quick and nutritious meal.",
    "imgURL":"../../../assets/images/stirfried-vegetables.webp",
    "ingredients": [
      "1 cup Broccoli florets",
      "1 Carrot, julienned",
      "1 Red Bell Pepper, sliced",
      "1 tablespoon Soy Sauce",
      "1 tablespoon Olive Oil",
      "1 tablespoon Sesame Oil",
      "2 cloves Garlic, minced",
      "1 teaspoon Ginger, minced",
      "Sesame seeds for garnish"
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "10 minutes",
    "servingSize": "2",
    "difficultyLevel": "Easy",
    "cuisineType": "Asian",
    "category": "Dinner",
    "rating": 2,
    "reviews": [
      {
        "username": "Emma White",
        "rating": 1,
        "comment": "Loved the mix of flavors! Very satisfying."
      },
      {
        "username": "Lucas King",
        "rating": 3,
        "comment": "Great recipe, though I would add some tofu next time."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Heat oils in a wok or large pan, sauté garlic and ginger until fragrant.",
        "imageUrl": "step1.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Add vegetables to the pan and stir-fry for 5-7 minutes.",
        "imageUrl": "step2.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Add soy sauce and stir to combine. Cook for another 2 minutes.",
        "imageUrl": "step3.jpg"
      }
    ],
    "tags": ["vegan", "quick", "healthy"]
  },

  {
    "name": "Beef Tacos",
    "description": "Flavorful ground beef tacos with all the toppings you love – perfect for Taco Tuesday!",
    "imgURL":"../../../assets/images/Beef Tacos.webp",
    "ingredients": [
      "500g Ground Beef",
      "1 packet Taco Seasoning",
      "8 Taco Shells",
      "1 cup Lettuce, shredded",
      "1 Tomato, diced",
      "1/2 cup Cheddar Cheese, shredded",
      "Sour Cream",
      "Salsa"
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "15 minutes",
    "servingSize": "4",
    "difficultyLevel": "Easy",
    "cuisineType": "Mexican",
    "category": "Dinner",
    "rating": 4.5,
    "reviews": [
      {
        "username": "Isabella Adams",
        "rating": 5,
        "comment": "Perfect tacos! So easy to make and so tasty!"
      },
      {
        "username": "Michael Scott",
        "rating": 4,
        "comment": "Great recipe, but I like my tacos spicier."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Brown the ground beef in a pan, add taco seasoning and cook until done.",
        "imageUrl": "step1.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Warm the taco shells in the oven as per package instructions.",
        "imageUrl": "step2.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Fill taco shells with seasoned beef, and top with lettuce, tomato, cheese, sour cream, and salsa.",
        "imageUrl": "step3.jpg"
      }
    ],
    "tags": ["comfort food", "family-friendly", "quick"]
  },
  

  {
    "name": "Mango Smoothie",
    "description": "A refreshing and tropical smoothie made with ripe mangoes, yogurt, and a touch of honey.",
    "imgURL":"../../../assets/images/Mango-Smoothie.webp",
    "ingredients": [
      "1 ripe Mango, peeled and diced",
      "1/2 cup Greek Yogurt",
      "1/2 cup Orange Juice",
      "1 tablespoon Honey",
      "1/2 cup Ice Cubes"
    ],
    "preparationTime": "5 minutes",
    "cookingTime": "N/A",
    "servingSize": "2",
    "difficultyLevel": "Easy",
    "cuisineType": "Smoothie",
    "category": "Breakfast",
    "rating": 5.0,
    "reviews": [
      {
        "username": "Olivia Harris",
        "rating": 5,
        "comment": "Super refreshing and delicious. Perfect for summer!"
      },
      {
        "username": "Ethan Lewis",
        "rating": 5,
        "comment": "The best mango smoothie I’ve ever had!"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Add mango, yogurt, orange juice, and honey to a blender.",
        "imageUrl": "step1.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Blend until smooth and add ice cubes to thicken.",
        "imageUrl": "step2.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Serve chilled in glasses and enjoy!",
        "imageUrl": "step3.jpg"
      }
    ],
    "tags": ["healthy", "smoothie", "breakfast"]
  },
  {
    "name": "Spaghetti Carbonara",
    "description": "A classic Italian pasta dish made with creamy sauce, crispy bacon, and perfectly cooked spaghetti.",
    "imgURL": "../../../assets/images/speghati.webp",
    "ingredients": [
      "200g Spaghetti",
      "100g Pancetta or Bacon, diced",
      "2 large Eggs",
      "50g Parmesan cheese, grated",
      "50g Pecorino cheese, grated",
      "2 cloves Garlic, minced",
      "Salt and Pepper",
      "Fresh Parsley for garnish"
    ],
    "preparationTime": "5 minutes",
    "cookingTime": "10 minutes",
    "servingSize": "2",
    "difficultyLevel": "Hard",
    "cuisineType": "Italian",
    "category": "Dinner",
    "rating": 3,
    "reviews": [
      {
        "username": "Sophia Brown",
        "rating": 5,
        "comment": "Perfectly creamy and delicious. My family loved it!"
      },
      {
        "username": "James Green",
        "rating": 4,
        "comment": "Great flavor, but I prefer less cheese in my carbonara."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Cook the spaghetti according to package instructions.",
        "imageUrl": "step1.jpg"
      },
      {
        "stepNumber": 2,
        "instruction": "Fry pancetta in a pan until crispy. Add garlic and cook for another minute.",
        "imageUrl": "step2.jpg"
      },
      {
        "stepNumber": 3,
        "instruction": "Whisk together eggs and grated cheese, then mix into the pasta along with pancetta.",
        "imageUrl": "step3.jpg"
      }
    ],
    "tags": ["pasta", "italian", "creamy"]
  }
  
  
  
];

@Output()
viewDetail:EventEmitter<string>=new EventEmitter<string>();

recipeDetials:any;

allRecipies(recip:any){
  this.recipeDetials=recip
  this.viewDetail.emit(this.recipeDetials);
  // console.log(this.recipeDetials);
  
}

  
// @Input()
// selectedRecipe:string;

}
