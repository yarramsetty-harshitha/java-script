/*const obj={
    id:1,
    name:"guest"
}

console.log(obj.loc);
obj.loc='hyd'
console.log(obj);*/

// [] - array
// {} - object

/*const users = [
    {
        id:1,
        name: "user1",
        loc: "hyd"
    },
    {
        id: 2,
        name: "user2",
        loc:"hyd"
    },
]


console.log(users[0]);
/* to specify particular variable like id or name or loc we use users[0].name*/
// for of - arrays
// for in - objects

/*function myFun(a,b){

    return a+b;

}
console.log(myFun(5,3))

function myFun(a,b){

    return a-b;

}
console.log(myFun(5,3))
*/

//anonymous : no need of writing name for function we use reference name for calling.

/*const fun = function (a,b){

    return a+b;

}
console.log(fun(5,3)) */

/*function doMath(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
            break;

        default:
            return "Invalid operator";
    }

    return result;
}

// Calling the function
console.log(doMath(10, 5, "+")); 
console.log(doMath(10, 5, "*")); 
console.log(doMath(10, 0, "/")); */

/*let name = "harshi";
let age = "22";

console.log("My name is "+ name + ". she is " + age); //type 1
console.log(`my name is ${name}. she is ${age}`);  //type 2 imp */

//DOM in JS
// console.log(document.body);
//tags,attributes,content combinely known as element.

/*let buchi = document.getElementById("buchi"); //to get element by using id
buchi.innerText = "<b>hello</b>"; //it will print whole element
buchi.innerHTML = "<b>hello</b>"; //it will print content */

let para = document.getElementsByClassName("para");
let boxes = document.getElementsByClassName("box");

console.log(boxes); //prints as array
console.log(para);

//to change particular one we'll use index

boxes[1].innerHTML = "hii";
para[0].innerHTML = "helloooo";