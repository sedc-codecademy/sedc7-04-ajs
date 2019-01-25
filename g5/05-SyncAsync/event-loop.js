// //Synchronuous code

// let a = 10;

// function changeA()
// {
// 	a = 14;
// 	console.log(a);
// 	return a;
// }

// function changeAB()
// {
// 	a = 20;
	
// 	console.log(a);
// 	return a;
// }

// console.log(a, changeA(), changeAB());
// console.log(a);
// changeA();
// changeAB();

//Async code

// function a()
// {
// 	setTimeout(() => {
// 		c = 10;
// 	}, 200);
	
// 	return 20;
	
// }

// function b()
// {
// 	return 50;
// }

// setTimeout(() => {
// 	console.log(c);
// }, 100);

// let c = a();
//  c = b();

// console.log(c)

// setInterval(() => {
// 	c = 4;
// }, 10);

// setInterval(() => {
// 	console.log(c);
// }, 1)

let button = document.createElement('button');
button.innerHTML = 'ClickMe';
button.setAttribute('class', 'our-button');
button.setAttribute('id', 'asd');

button.addEventListener('click', () => {
		console.log('clicked');
		return 10;
	})
	
	document.body.appendChild(button);