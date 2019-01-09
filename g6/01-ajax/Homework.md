# HOMEWORK

## Try to copy an object or an array and break the reference

    ```javascript
    let a = { name: 'Igor' }
    let b = a
    a.name = 'Ajax'
    
    // try to get different result
    console.log(a.name)
    console.log(b.name)
    ```

## Use the code from the exercise and try to make a ajax request to list all the starships/people
```javascript
$.ajax({
        url,
        type: 'GET',
        success: data => {
            planets = data.results;
            next = data.next;
            previous = data.previous
            showPlanets(planets)
        },
        error: err => { console.log(`something bad happened`, err) }
    })
```
### Bonus

Try to find a free api and execute some ajax requests
