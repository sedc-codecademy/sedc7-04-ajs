# Recipes app
## Requirements
1. Create Ingredient Class
	* name - string
	* type - must be: meat, dairy, fruit, vegetable, grain
	* calories - number
	* amount - number
	* isVegetarian - auto generated from type
	* isVegan - auto generated from type
	* fullCaloriesValue - method that returns full calories value ( calories * amount )
2. Create Recipe Class
	* name - string
	* description - string
	* ingredients - Array of ingredients
	* timeToCook - number
	* img - link to an image
	* isVegetarian - auto generated from ingredients
	* isVegan - auto generated from ingredients
	* fullCaloriesValue - method that returns full calories of all ingredients
	* printIngridients - method that returns a string of the ingredients
	* printRecipe - **static** method that accepts a Recipe object and returns a string of HTML structure of one recipe

Create 10 Ingredient objects and 3 recipes inside an array. The app should have 3 buttons: All, Vegetarian and Vegan. When clicked the buttons should show the corresponding recipes in the HTML!

## Ingridient Class
```javascript
class Ingredient {
    constructor(name, type, calories, ammount){
        this.name = name;
        this.type = type;
        this.calories = calories;
        this.amount = ammount;
        this.isVegetarian = this.type === "meat" ? false : true;
        this.isVegan = this.type === "meat" || this.type === "dairy" ? false : true;  
    }
    get type(){
        return this._type;
    }
    set type(foodType){
        let foodTypes = ["meat", "dairy", "fruit", "vegetable", "grain"];
        if(foodTypes.includes(foodType)) return this._type = foodType;
        throw new Error(`Our app does not support ${foodType} produces!`);
    }
    fullCaloriesValue(){
        return this.calories * this.amount;
    }
}
```

