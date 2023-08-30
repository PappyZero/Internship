/*let nme = "James";
console.log(nme);

let last_name = "AMADDIN";
let first_name = "MAJID";
console.log(last_name, first_name);

let num = 330;
console.log(num);*/
//document.getElementById("btn_3_3").classList.remove("active");


function clicker()
{
    document.getElementById("button_p").innerHTML = "Button Clicked!";
}

function mouse_hover()
{
    document.getElementById("mousehover").style.color= "White";
    document.getElementById("mousehover").style.backgroundColor= "Red";
    document.getElementById("mousehover").style.width= "200px";
    document.getElementById("mousehover").style.height= "250px";
    document.getElementById("mousehover").style.border= "3px black solid";
    document.getElementById("mousehover").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, quibusdam ipsa distinctio aut quisquam nostrum soluta ducimus nihil neque quo, fugitrepellendus non ipsam. Debitis architecto libero rem. Excepturi";
}

function mouse_out()
{
    document.getElementById("mousehover").style.color= "black";
    document.getElementById("mousehover").style.backgroundColor= "pink";
    document.getElementById("mousehover").style.width= "200px";
    document.getElementById("mousehover").style.height= "250px";
    document.getElementById("mousehover").style.border= "3px black solid";
}

document.getElementById("one").addEventListener("mouseout", function()
{
    document.getElementById("one").style.color="red";
    document.getElementById("one").style.backgroundColor="white";
});

const two = document.getElementById('one');

two.addEventListener("mouseover", function()
{
    two.style.color="red";
    two.style.backgroundColor="gray";
});

two.addEventListener("mouseout",  function()
{

});



document.getElementById("btn_1").addEventListener("click", function()
{
    if (document.getElementById("div_1").style.display === "none")
    {
        document.getElementById("div_1").style.display = "block";
        document.getElementById("div_2").style.display = "none";
        document.getElementById("div_3").style.display = "none";
    }
    else
    {
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "none";
        document.getElementById("div_3").style.display = "none";
    }
});

document.getElementById("btn_2").addEventListener("click", function()
{
    if (document.getElementById("div_2").style.display === "none")
    {
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "block";
        document.getElementById("div_3").style.display = "none";
    }
    else
    {
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "none";
        document.getElementById("div_3").style.display = "none";
    }
});

document.getElementById("btn_3").addEventListener("click", function()
{
    if (document.getElementById("div_3").style.display === "none")
    {
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "none";
        document.getElementById("div_3").style.display = "block";
    }
    else
    {
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "none";
        document.getElementById("div_3").style.display = "none";
    }
});



document.getElementById("btn_1_1").addEventListener("click", function()
{
        document.getElementById("btn_1_1").classList.add("active");
        document.getElementById("btn_2_2").classList.remove("active");
        document.getElementById("btn_3_3").classList.remove("active");

        document.getElementById("div_1_1").style.display = "block";
        document.getElementById("div_2_2").style.display = "none";
        document.getElementById("div_3_3").style.display = "none";

});

document.getElementById("btn_2_2").addEventListener("click", function()
{
        document.getElementById("btn_1_1").classList.remove("active");
        document.getElementById("btn_2_2").classList.add("active");
        document.getElementById("btn_3_3").classList.remove("active");
        
        document.getElementById("div_1_1").style.display = "none";
        document.getElementById("div_2_2").style.display = "block";
        document.getElementById("div_3_3").style.display = "none";

});

document.getElementById("btn_3_3").addEventListener("click", function()
{
        document.getElementById("btn_1_1").classList.remove("active");
        document.getElementById("btn_2_2").classList.remove("active");
        document.getElementById("btn_3_3").classList.add("active");

        document.getElementById("div_1_1").style.display = "none";
        document.getElementById("div_2_2").style.display = "none";
        document.getElementById("div_3_3").style.display = "block";
});