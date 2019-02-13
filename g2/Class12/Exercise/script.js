class Recipe {
    constructor(name, description, ingredients, timeToCook, imgLink){
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.timeToCook = timeToCook;
        this.img = imgLink
        this.isVegetarian = this.ingredients
        .map(ingredient => ingredient.isVegetarian)
        .reduce((result, current) => result = result && current, true);
        this.isVegan = this.ingredients
        .map(ingredient => ingredient.isVegan)
        .reduce((result, current) => result = result && current, true);
    }
    fullCaloriesValue(){
        return this.ingredients
        .map(ingredient => ingredient.fullCaloriesValue())
        .reduce((result, current) => result += current, 0);
    }
    printIngridients(){
        return this.ingredients
        .reduce((resultString, current) => resultString += `${current.amount} x ${current.name}(${current.calories}k)  `, "");
    }
    static generateImg(recipe){
        return `<img src="${recipe.img}" class="card-img" alt="${recipe.name}">`;
    }
    static printRecipe(recipe){
        return `      
        <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            ${Recipe.generateImg(recipe)}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${recipe.name}</h5>
              <p class="card-text">${recipe.description}</p>
              <p><span class="bold">Time to cook: </span> ${recipe.timeToCook}</p>
              <p><span class="bold">Calories: </span> ${recipe.fullCaloriesValue()} calories</p>
              <p><span class="bold">Ingredients: </span> ${recipe.printIngridients()}</p>
              <p><span class="bold">Vegeterian: </span> ${recipe.isVegetarian ? "Yes" : "No"}</p>
              <p><span class="bold">Vegan: </span> ${recipe.isVegan ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>`
    }
}

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

let recipesService = {
    recipes: [],
    recipeList: document.getElementById("recipesList"),
    changeNav: function(page){
        let navItems = document.getElementsByClassName("nav-link");
        switch (page) {
            case "all":
                navItems[0].classList.add("active");
                navItems[1].classList.remove("active");
                navItems[2].classList.remove("active");
                this.printRecipes(false, false);     
                break;
            case "vegeterian":
                navItems[1].classList.add("active");
                navItems[0].classList.remove("active");
                navItems[2].classList.remove("active");  
                this.printRecipes(true, false);       
                break;
            case "vegan":
                navItems[2].classList.add("active");
                navItems[0].classList.remove("active");
                navItems[1].classList.remove("active");
                this.printRecipes(false, true);      
                break;
            default:
                navItems[0].classList.add("active");
                navItems[1].classList.remove("active");
                navItems[2].classList.remove("active");
                this.printRecipes(false, false); 
                break;
        }
    },
    printRecipes: function(onlyVegeterian, onlyVegan){
        this.recipeList.innerHTML = "";
        if(onlyVegeterian) this.recipes
        .forEach(recipe => recipe.isVegetarian ? this.recipeList.innerHTML += Recipe.printRecipe(recipe) : "");
        if(onlyVegan) this.recipes
        .forEach(recipe => recipe.isVegan ? this.recipeList.innerHTML += Recipe.printRecipe(recipe) : "");
        if(!onlyVegan && !onlyVegeterian) this.recipes
        .forEach(recipe => this.recipeList.innerHTML += Recipe.printRecipe(recipe));
    }
}
let chicken = new Ingredient("Chicken", "meat", 300, 1);
let carrot = new Ingredient("Carrot", "vegetable", 20, 4);
let heavyCream = new Ingredient("Heavy Cream", "dairy", 140, 1);
let potato = new Ingredient("Potato", "vegetable", 55, 3);
let cheese = new Ingredient("Cheese", "dairy", 110, 1);
let garlic = new Ingredient("Garlic", "vegetable", 40, 2);
let apple = new Ingredient("Apple", "fruit", 30, 1);
let orange = new Ingredient("Orange", "fruit", 50, 2);
let pear = new Ingredient("Pear", "fruit", 45, 2);
recipesService.recipes.push(new Recipe("Curry Chicken", "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.",[chicken, garlic, potato, carrot, heavyCream], 80, "https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg"));
recipesService.recipes.push(new Recipe("Fruit Salad", "Bring orange juice, lemon juice, brown sugar, orange zest, and lemon zest to a boil in a saucepan over medium-high heat. Layer the fruit in a large, clear glass bowl in this order: pineapple, strawberries, kiwi fruit, bananas, oranges, grapes, and blueberries. ",[orange, apple, pear], 15, "http://images.media-allrecipes.com/userphotos/960x960/4518422.jpg"));
recipesService.recipes.push(new Recipe("Cool salad", "Get some vegetables together and make some salad. Salad is great. Eat more salad and life would be cooler. I actually don't think your life will get cooler but try and eat salad anyways!",[cheese, carrot, potato, garlic], 80, "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"));

document.getElementsByClassName("nav")[0].addEventListener("click", (e)=>{
    e.preventDefault();
    recipesService.changeNav(e.target.getAttribute("value"));
})