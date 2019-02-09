# Exercise
## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false

## Create a Lion class that inherits from Animal and has:
* isKingOfTheJungle - boolean
* huntingSkill - must be from 1 to 10 ( validate on setting this property )
* hunt - a method that checks if the input is an Animal.
	* If the input is an Animal than randomly generate a number from 1 to 10. If the number is equal or less than the huntingSkill of this Lion than try and eat the animal with the eat method.
	* If the Lion is king of the jungle than automatically try and eat the animal no matter the huntingSkill
	* If the number is larger than the huntingSkill then write in the console: The Lion didn't catch it's prey
	* If the input is not an animal write in the console: The Lion can't hunt (the input)

**Note**: name and type of the lion should be added automatically without entering it from the constructor

## Create a Rabbit class that inherits from Animal and has:
* speed - must be from 1 to 10 ( validate on setting this property )
* size - custom get and set. ( set is normal, get returns the size value multiplied by the speed property. )
