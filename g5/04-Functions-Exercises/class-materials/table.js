function getTableTitle()
{
	let title = document.querySelector('.title');
	title.setAttribute('style', `background: #CACACA; font-family: Arial; font-size: 18px;`);
	
	document.querySelector('.title > td').setAttribute('style', 'padding: 10px');
	
	return title;
}

function colorHeading(heading)
{
	heading.setAttribute('style', `background: #EFEFEF; font-size: 14px; font-family: Arial; font-weight: bold;`);
}

function getHeading()
{
	let heading = document.querySelector('.heading');
	
	colorHeading(heading);
	
	return heading;
}

function styleHeadingTitles(titlesArray)
{
	titlesArray.forEach((title) => {
		title.setAttribute('style', `padding: 10px;`)
	});
}

function applyClickEventsOnHeadingTitles(titlesArray)
{
	titlesArray.forEach((title) => {
		title.addEventListener('click', clickOnTitle);
	})
}

function bindHeadingTitles()
{
	let titles = document.querySelectorAll('.heading > td');
	
	styleHeadingTitles(titles);
	applyClickEventsOnHeadingTitles(titles);
}

function clickOnTitle(e)
{
	alert('Click');
}

getTableTitle();
getHeading();
bindHeadingTitles();