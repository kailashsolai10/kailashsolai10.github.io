//swap program

var x;
var x=10;
var y=20;
a=x;
x=y;
y=a;
console.log(x,y);

//---------------------

//array add a value at last item

var a=[1,2,3,4,5,6];
a.push(7);
console.log(a);

//remove last one
var a=[1,2,3,4,5,6];
a.pop();
console.log(a);

//add value at first item

var a=[1,2,3,4,5,6];
a.unshift(9);
console.log(a);
//remove first

var a=[1,2,3,4,5,6];
a.shift();
console.log(a);
//

var a=[1,2,3,4,5,6];
var i;
for(i=0;i<a.length;i++)
console.log(a[i]);


//array using concat() method
var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale);
  console.log(children);

  //array using indexOf() 
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

//array using includes()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
console.log(n);

//array using join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
console.log(energy);

//array using reverse()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
//array using valueOf()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
console.log(fruits);

//array using splice()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//array using slice()
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);

//objects

var stu={
    'name':'ravi',
    'email':'ravi123@',
    'num':'7'
}
console.log(stu['name']);

//-------


students=[
    {
        'name':'raja',
        'email':'ravi123@',
        'num':'7' 
    },
    {
        'name':'ravi',
    'email':'ravi123@',
    'num':'7'
    },
{
    'name':'ragu',
    'email':'ravi123@',
    'num':'7'
}
]
console.log(students);
for(var i=0;i<students.length;i++)
{
    var student=a[i];
}
for(prop in student)









