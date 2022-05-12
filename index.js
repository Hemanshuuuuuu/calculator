let a =document.getElementById("num1");
let b =document.getElementById("num1");
let input=document.getElementById("in_put");

function but1() {
    let a =document.getElementById("num1");
    let input=document.getElementById("in_put");
    input.value=input.value+"1";
}
function but2() {
    let a =document.getElementById("num2");
    let input=document.getElementById("in_put");
    input.value=input.value+"2";
}
function add() {
    let inp1=document.getElementById("in_put1");
    let inp2=document.getElementById("in_put2");
    num1=parseInt(inp1.value);
    num2=parseInt(inp2.value);
    sum=num1+num2;
    let result=document.getElementById("res");
    result.innerHTML=sum;
}
function sub() {
    let inp1=document.getElementById("in_put1");
    let inp2=document.getElementById("in_put2");
    num1=parseInt(inp1.value);
    num2=parseInt(inp2.value);
    sum=num1-num2;
    let result=document.getElementById("res");
    result.innerHTML=sum;
}
function mul() {
    let inp1=document.getElementById("in_put1");
    let inp2=document.getElementById("in_put2");
    num1=parseInt(inp1.value);
    num2=parseInt(inp2.value);
    sum=num1*num2;
    let result=document.getElementById("res");
    result.innerHTML=sum;
}
function div() {
    let inp1=document.getElementById("in_put1");
    let inp2=document.getElementById("in_put2");
    num1=parseInt(inp1.value);
    num2=parseInt(inp2.value);
    sum=num1/num2;
    let result=document.getElementById("res");
    result.innerHTML=sum;
}
function clr() {
    let inp1=document.getElementById("in_put1").value="";
    let inp2=document.getElementById("in_put2").value="";
}
