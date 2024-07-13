// console.log("operator in js")
// let a = 45;
// let b = 4;

// console.log("a ++ b =", ++a)


// for(let i=0; i<500; i++){
//     console.log(i) 
// }


// let obj = {
// harry:90,
// shubh:543,
// hyr:42,
// fast:45,
// } 





// let marks = [ 45,321,321,56,56,482];


// console.log(marks)

// for (let idx = 0; idx < marks.length; idx++) {
//     console.log( marks[idx])
// }

// let heroes = ["ironamnn", "spiderman", "hulk", "thor", "antman"]


// for(let idx = 1; idx <= heroes.length; idx++) {
//     console.log( heroes.touppercase[idx])
// }

// let cities = ["behrampur", "gurdaspur", "gurgram", "amristar" ];

// console.log(cities)

// let items = [561, 46, 5645, 6445,
// ];
// let idx = 0;
// for (let val of items){
//     console.log ('value at index ${idx} = ${val}');
//     idx++;
// }



// let a = [4389,98,465,65,65,98,5,65]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }


// let marks = [565,51,214,453,421];

// let sum = 0;

// for (let val of marks){
//    sum +=val;
// }
// let avg = sum / marks.length;
// console.log('avg marks of ths class = ${avg}');


// let arr2 = [45,23,21,0,3,5]
// let a2 = arr2.filter( (a)=>{
// return a<10

// })

// console.log(a2)

//ARRAYS METHODS//
//push method// add to end
// let heroe = ["antman", "superman", "ironman", ]
// console.log(heroes)
// heroes.push("arukunj")

//pop  delete from end  and delete//
let hero = ["antman", "superman", "ironman", ]
console.log(hero);
 let deletedItem = hero.pop();
console.log("deleted",deletedItem)

//to string converts arrays to string//
let her = ["antman", "superman", "ironman", ];
console.log(her);
console.log(her.toString());

//concat = join multiple arrays & return result
let arukunj = ["thor", "spiderman", "ironman"];
let kunjaru = ["superman", "batman"];
let kunj = arukunj.concat(kunjaru);
console.log(kunj);

//Unshift add a new name in starting
let actorhoz = ["run", "fast", "ironman" ]
actorhoz.unshift("hp laptop ryzen 5")
console.log(actorhoz)

//shift arrays//
let actorhoze = ["run", "fast", "ironman" ]
actorhoze.shift()
console.log(actorhoze)

// Slice //
let slicenew = ["milton", "bottle", "mouse","copy"]
console.log(slicenew)
console.log(slicenew.slice(0 ,2));

//splice change original arrays (add,remove,replace)
//(startidx, delcount, newEl)
let arr = [1,2,3,4,5,6,7];
 arr.splice(2,0,101);

// Delete elements//
arr.splice(3,1); 

let company = ["bloomber", "microsoft", "uber","google","ibm","netflix"]
company.shift()
console.log(company)
company.splice(2,1,"ola");
let arrays= [45,5546,2154,21,4,1];
console.log(arrays)
 
let gun = ["fun", "run", "you", "who"];

gun .shift()
console.log(gun)

