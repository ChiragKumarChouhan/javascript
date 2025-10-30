document.write("hello");
console.log("hello world");

let arr=[1,2,3,4,5]
for(let i=0;i<3;i++){
    console.log("chirag")
}
console.log(arr)

let a=5
a=7;

// let a=4 let can not be redecalre in scope
console.log(typeof (arr))

let x =20,y=2
console.log(x,y)

let c=x
x=y
y=c
console.log(x,y)


// arithmatic operator

console.log(x+y)
console.log(x-y)
console.log(x/y)
// condiotional statement

if(x>8){
    console.log("you are eligible ");
}else{
    console.log("you are eligible ");
}

let day=3

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("tuesday");
        break;
        case 4:
        console.log("tuesday");
        break;
        default:console.log("hello");
}




// for off

let arr2=[1,2,3,4,5,6]
for(let value of arr2)
{
    console.log(value);
}

let obj={name:"chirag",age:27,city:"delhi"};
for(let key in obj){
    console.log(key+":"+obj[key]);
    console.log('${key}: ${obj[key]}');
}
