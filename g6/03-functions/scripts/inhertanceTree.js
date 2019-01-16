let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'black labrador', parent: 'dogs' },
    { id: 'white labrador', parent: 'dogs' },
    { id: 'yellow labrador', parent: 'dogs' },
    { id: 'mexican labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];

const makeTree = (categories, parent) => {
    let node = {}
    console.log(node)
    categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node;
}

// console.log(categories.filter(el => el.parent !== 'dogs'))

console.log(makeTree(categories, null))