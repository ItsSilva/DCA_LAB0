// 1. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const objectsArray = [ 
        {
        name: 'John',
        age: 30
        },
        {
        name: 'Jane',
        age: 25
        }
    ]
const sumAge = (objectsArray) => {
    return objectsArray.reduce((acu, {age}) => acu + age, 0);
};
console.log(sumAge(objectsArray));

// 2. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filterObjects = [
    {
        name: 'Apple',
        price: 25,
    },
    {
        name: 'Banana',
        price: 55,
    },
    {
        name: 'Cherry',
        price: 35,
    }
];
const filterPrices = filterObjects.filter((item) => item.price > 50);
console.log(filterPrices);

// 3. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const filterNames = [
    {
        name: 'Juan',
        note: 5,
    },
    {
        name: 'Pedro',
        note: 4,
    },
    {
        name: 'Maria',
        note: 3,
    }
];
filterNames.forEach((item) => {
    if(item.name === 'Juan') {
        console.log(item);
    } else {
        console.log('Null');
    }
});

// 4. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const filterProducts = [
    {
        name: 'Apple',
        price: 25,
    },
    {
        name: 'Banana',
        price: 55,
    },
    {
        name: 'Cherry',
        price: 35,
    }
];
filterProducts.sort((a, b) => a.price - b.price);
console.log(filterProducts);

// 5. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const peopleArray01 = [
{
    name: 'Juan',
    age: 25,
},
{
    name: 'Pedro',
    age: 30,
},
{
    name: 'Maria',
    age: 35,
}
];
const peopleArray02 = [
{
    name: 'Jean',
    age: 25,
},
{
    name: 'Maria',
    age: 30,
},
{
    name: 'Andres',
    age: 35,
}
];
const peopleArray03 = peopleArray01.concat(peopleArray02);
console.log(peopleArray03);


