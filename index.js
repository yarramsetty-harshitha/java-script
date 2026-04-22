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

//DOM in JS (document object model)
// console.log(document.body);
//tags,attributes,content combinely known as element.

/*let buchi = document.getElementById("buchi"); //to get element by using id
buchi.innerText = "<b>hello</b>"; //it will print whole element
buchi.innerHTML = "<b>hello</b>"; //it will print content */

/*let para = document.getElementsByClassName("para");
let boxes = document.getElementsByClassName("box");

console.log(boxes); //prints as array
console.log(para);

//to change particular one we'll use index

boxes[1].innerHTML = "hii";
para[0].innerHTML = "helloooo";*/

//events
/*const myFun = () => {
    console.log("hello"); //here it just prints hello when we clicked button
};*/

//to change already existing word to another by clicking button i.e hello -> bye
/*const myFun = () => {
    let display =document.getElementById("display")
   // display.innerHTML = "bye"
   display.innerHTML = display.innerHTML === "hello" ? "bye" : "hello" //it changes hello to bye and bye to hello by clicking

    if(display.innerHTML === "hello") {
        display.style.color = "blue";
    }
    else {
   display.style.color = "red"
    }
}; */

//changing one image to another by clicking button
/*let isShow = true
const myFun = () => {
    let display = document.getElementById("display")

    if(isShow) {
        display.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb34N79_25Qvdze3AEKBpgrVV7zWyNLwr_Q&s"
        isShow = !isShow
    } else {
        display.src = "https://i.pinimg.com/474x/cc/58/3c/cc583c6d136fff2481317dce00fd3bcb.jpg"
        isShow = !isShow
    }
}*/

/*const add = () => {
        event.preventDefault()

    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 + val2}`
}
const sub = () => {
     event.preventDefault()
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")

    display.innerHTML = `the diff of ${val1} and ${val2} is ${val1 - val2}`
}
const mul = () => {
     event.preventDefault()
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")

    display.innerHTML = `Multiplication of ${val1} and ${val2} is ${val1 * val2}`
}*/

//changing colour randomly

/*const changecolor = () => {
let display = document.getElementById("display")
let color = "#" 
let colorcodes= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

for(let i=0;i<6;i++)
{
    let randomno = Math.floor(Math.random() * 16)
    color += colorcodes[randomno]
}
    display.style.backgroundColor = color
}

changecolor()*/

// try catch : for array handling

/*try {

}catch(err) {

}


//call backs

function myFun() {
    console.log("hello");
}

//setTimeout(myFun,2000) // it prints hello only once after 2 seconds

// to print hello for every 2 

setInterval(myFun,2000)*/



 const fetchAPI = async () => {
        let imageURL = null;
        try {
            let res = await fetch("https://dog.ceo/api/breeds/image/random")
            let data = await res.json()
            imageURL = data.message


        }catch(err) {
            console.log(err);
        } 

        let image = document.getElementById("image")
        image.src = imageURL
    }
    fetchAPI()

