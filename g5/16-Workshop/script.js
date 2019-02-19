/*
	List of bands
	
	Create a webpage that will display bands data on load.
	Bends data are available at :
	https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json
	
	1. Make a list with bands, where on each page you will display 10 bands and each band should have following fields displayed:
	
	- Row number
	- Name of the band
	- Visual indication is bend active
	- Comma separated list of tags
	- List of current band members (each in a separate line)
	- Total number of albums
	
	- Sort the list by band name or total number of albums.
	
	2.
	- Search box that allow the user to filter the bands by name
	- Dropdown menu with tags, and filter only bands that are having that tag
	- Paging controls.
	
*/
let bands = [];

let page = 1;
let total = 0;
let itemsPerPage = 10;

let searchString;

let tags = ['rock','alternative rock','alternative','political','rapcore','metal'];

let input = document.getElementById("search-input");
input.addEventListener('keyup', (event) => {
	searchString = event.target.value;
})

let select = document.querySelector(".tags-filter");
select.addEventListener('change', (event) => {
	filterByTagName(event.target.value);
})

async function fetchData()
{
	return fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json')
	.then(response => response.json())
	.catch((error) => {
		console.log(error);
		bands = [];
	});
}

async function initLoad()
{
	let data = await fetchData();
	console.log(data);
	
	if(data && data.length)
	bands = data;
	
	renderPagination(bands);
	renderBands(bands);
	generateTagFilter();
}

function renderBands(bandsArr)
{
	let tbody = document.querySelector('.bands > tbody');
	tbody.innerHTML = ''; //Remove all previous content
	
	bandsArr.forEach((band, i) => {
		
		if(i >= ((page-1) * itemsPerPage) && i < (page * itemsPerPage))
		{
			
		let tr = document.createElement('tr');
		
		let rowNumber = document.createElement('td');
		rowNumber.innerHTML = i + 1;
		
		tr.appendChild(rowNumber);
		
		for(let item in band)
		{
			let td = document.createElement('td');
			
			if(item !== "members" && item !== "albums")
			{
				td.innerHTML = band[item];
			}
			else if(item === "members")
			{
				let ul = document.createElement('ul');
				
				band[item].forEach((member) => {
					let li = document.createElement('li');
					li.innerHTML = member.name;
					ul.appendChild(li);
				})
				
				td.appendChild(ul);
			}
			else if(item === "albums")
			{
				td.innerHTML = band[item].length;
			}
			
			tr.appendChild(td);
		}
		
		tbody.appendChild(tr);
		}
		
	});
}

function renderPagination(bandsArr)
{
	total = Math.ceil(bandsArr.length / itemsPerPage);
	
	let pg = document.querySelector('.page');
	pg.innerHTML = '';
	
	for(let i = 0; i < total; i++)
	{
		let span = document.createElement('span');
		span.setAttribute('class', 'page-item');
		span.innerHTML = `<a onclick="changePage(${i+1})">${i+1}</a>`;
		
		pg.appendChild(span);
	}

}

function searchBand()
{
	let newBands = bands.filter((x) => x.name.match(searchString))
	console.log(newBands);
	
	page = 1;
	renderPagination(newBands);
	renderBands(newBands);
}

function changePage(pageNum)
{
	page = pageNum;
	renderBands(bands);
}


let sortName = false;
let sortAlbum = false;


function sortByName()
{
	page = 1;
	
	let newBands = bands.sort((a, b) => {
		if ( a.name < b.name ) return -1;
		if ( a.name > b.name ) return 1;
		return 0;
	})
	
	if(sortName) newBands.reverse();
	sortName = !sortName;
	
	renderPagination(newBands);
	renderBands(newBands);
}

function sortByAlbums()
{
	page = 1;
	
	let newBands = bands.sort((a, b) => {
		if ( a.albums.length < b.albums.length ) return -1;
		if ( a.albums.length > b.albums.length ) return 1;
		return 0;
	});
	
	
	if(sortAlbum) newBands.reverse();
	sortAlbum = !sortAlbum;
	
	renderPagination(newBands);
	renderBands(newBands);
}

function generateTagFilter()
{
	
	tags.forEach((tag) => {
		let opt = document.createElement("option");
		opt.setAttribute('value', tag);
		opt.innerHTML = tag;
		
		select.appendChild(opt);
	})
}

function filterByTagName(filter)
{
	let newBands = bands;
	
	if(filter !== "")
	{
		newBands = bands.filter((x) => x.tags.indexOf(filter) !== -1);
	}
	
	renderPagination(newBands);
	renderBands(newBands);
}

initLoad();