// первый объект
let me = {
    name: 'doniyor',
    surname: 'abdusalimov',
    age: 13,
    gender: 'male'
}

// второй объект
let you = {
    name2: 'sulton',
    surname2: 'akobirov',
    age2: 21,
    gender2: 'male'
}

// соединяю первый и второй объект
let me_you = Object.assign({}, me, { you })
console.log(me_you);

// все ключи 
let allkeys = Object.keys(me_you)
console.log(allkeys);

// все значения
let allvalues = Object.values(me_you)
console.log(allvalues);

// соединяю ключи и значения в одну 
let allkeys_allvalues = Object.entries(allkeys, allvalues)
console.log(allkeys_allvalues);

// распределяю
let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}

for (let key in allkeys_allvalues) {
    let type = typeof allkeys_allvalues[key];
    types[type].push(key);
}
console.log(types);