#### Exercise 1

Create a tree from an array of objects

```JavaScript
// provided array
let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
]

// how it should look

// {
//     animals: {
//         mammals: {
//             cats: {
//                 persian: {},
//                 siamese: {}
//             },
//             dogs: {
//                 cihuahua: {},
//                 labrador: {}
//             }
//         }
//     }
// }
```

#### Exercie 2

Calculate the the sum of all the objects weight

```JavaScript
// provided data
let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: []
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: []
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}
```