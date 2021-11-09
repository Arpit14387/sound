var d=document.getElementsByClassName("btn").length;

function sound(file)
{
    var audio= new Audio("" + file);
    audio.play();
}

for(var i=0;i<=d;i++)
{
document.getElementsByClassName("btn")[i].addEventListener("click",function(){
    var cn=this.className;
    click(cn);
    
})

document.addEventListener("keypress", function(event) {
var y=event.key;
    
    click("btn "+ y);
  
     });



function click(clk)
{
switch (clk)
{
    case "btn a":
        sound("sounds/tom-1.mp3");
        animation(0);
        break;

        case "btn b":
        sound("sounds/tom-2.mp3");
        animation(1);
        break;

        case "btn c":
        sound("sounds/tom-3.mp3");
        animation(2);
        break;

        case "btn d":
        sound("sounds/snare.mp3");
        animation(3);
        break;

        case "btn e":
        sound("sounds/crash.mp3");
        animation(4);
        break;

        case "btn f":
        sound("sounds/kick-bass.mp3");
        animation(5);
        break;
}
}

function animation(t)
{
    document.getElementsByClassName("btn")[t].classList.add("op");
let timeout= setTimeout(function(){ 
        document.getElementsByClassName("btn")[t].classList.remove("op"); }, 300);

    }}
