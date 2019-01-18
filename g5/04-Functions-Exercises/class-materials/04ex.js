/*

mostFrequentItem
Write a JavaScript program to find the most frequent item of an array.

Sample array : let arr1 = [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ];
Sample Output : a ( 5 times )

*/

let arr1 = [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ];

let mostFrequentItem = 1; //If it appear only once or less than once than it is not the most frequent item
let momentalItem = 0; //Momental item in the array
let itemItself;

for( let i = 0; i < arr1.length; i++)
{
	for(let j = i; j < arr1.length; j++)
	{
		if(arr1[i] === arr1[j])
		{
			momentalItem++;
		}
		
		if(mostFrequentItem < momentalItem)
		{
			mostFrequentItem = momentalItem;
			itemItself = arr1[i];
		}
	}
	
	momentalItem = 0
}


arr1.map((e1, i) => {
	
	arr1.map((e2) => {
		if(e1 === e2)
		{
			momentalItem++;
		}
		
		if(mostFrequentItem < momentalItem)
		{
			mostFrequentItem = momentalItem;
			itemItself = e1;
		}
	});
	
	momentalItem = 0;
});

console.log(`the most frequent item is: ${itemItself} - it has ${mostFrequentItem} like him in array`);



//Write a JavaScript function to find the difference of two arrays.
//a1 = [1, 2, 3], a2 = [100, 2, 1, 10])
//expected result: [3, 10, 100]

//a1 = [5, 2, 8], a2 = [100, 2, 1, 10])
//expected result: [5, 1, 8, 10, 100]

function diff(arr1, arr2)
{
	let different = [];
	
	arr1.map((i) => {
		
		if(arr2.indexOf(i) === -1)
		{
			different.push(i);
		}
	});
	
	arr2.map((i) => {
		
		if(arr1.indexOf(i) === -1)
		{
			different.push(i);
		}
	});
	
	return different;
}

//for home console.log([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
//expected result: [6]



//Use the following HTML code below, by using JS apply table style (CSS) and make the table sortable.
//When user click on one of the headers (under tr class="heading") the table should sort by that field

//https://bit.ly/2MhzY97