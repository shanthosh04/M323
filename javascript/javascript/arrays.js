const persons= [
    {name:"Shanthosh", age:18},
    {name:"Shruteesh", age:16},
    {name:"Shiresdan", age:9},
];

persons.push({name:"Anna",age:29});

persons.splice(0,1);

console.log(persons[1])

