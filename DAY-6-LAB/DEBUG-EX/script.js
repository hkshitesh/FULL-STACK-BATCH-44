// function sum(a, b)
// {
//     debugger;
//     const res= a+b;
//     debugger;
//     return res;
// }

// const s=sum(7,8);
// console.log("sum is :"+s);


// function printNumbers()
// {
//     debugger;
//     let i=0;
//     for(i=0; i<5; i++)
//     {
//         debugger;
//         console.log(i)
//     }
// }

// printNumbers();


const person = {
    name: 'John',
    age: 30,
    greet: function() {       
        debugger;
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet();