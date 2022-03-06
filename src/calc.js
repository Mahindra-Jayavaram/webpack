function add(a,b)
{
    return a+b;
}

const mult = (first, second)=>{
 return (first*second);
}

function toDisplay(){
    let content = document.getElementById("text").value;
    let output = document.getElementById("output");

    output.append(content);
}
// console.log(add(3,4));

export {add, mult,toDisplay};