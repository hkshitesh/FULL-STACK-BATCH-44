const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("\n Array Elements");
console.log(numbers);

numbers.push(25);
console.log("\n Array Elements after Push");
console.log(numbers);

numbers.pop()
console.log("\n Array Elements after Pop");
console.log(numbers);

const index = numbers.indexOf(22)
if(index!==-1)
{
    console.log("Index of 7 is "+index);
}
else{
    console.log("Element in not in the array");
}

const len = numbers.length;
console.log("Array Length is "+len);
