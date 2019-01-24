//async / await

async function willWaitForSomething()
{
	let a = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
						.then(response => response.json())
						.then(json => json);
						
	console.log(a)
}