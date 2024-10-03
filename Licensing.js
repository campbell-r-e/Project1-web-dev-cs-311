document.getElementById("index2").style.background = "aqua";
document.getElementById("index3").style.background = "aqua";
document.getElementById("index4").style.background = "aqua";
document.getElementById("index5").style.background = "aqua";
document.getElementById("Button").style.background = "aqua";
document.getElementById("Button1").style.background = "aqua";
document.getElementById("index12").style.color = "black";
var output;


function getOption() {
    //
    selectElement = 
          document.querySelector('#color');
    output = selectElement.value;
    
    // above borrowed from https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/
    if(output=="default"){
        output = "black";
    }
    document.getElementById("Button").style.color = output;
    document.getElementById("Button1").style.color = output;

    document.getElementById("Search").style.color = output;
    
    document.getElementById("index1").style.color = output;
   

    document.getElementById("color").style.color = output;
    document.getElementById("index2").style.color = output;
   


    document.getElementById("index3").style.color = output;
   


    document.getElementById("index4").style.color = output;
  

    document.getElementById("index5").style.color = output;
   

    document.getElementById("index6").style.color = output;
    document.getElementById("index7").style.color = output;
    
    document.getElementById("index8").style.color = output;
    
    document.getElementById("Search").style.color = output;

    document.getElementById("a").style.color = output;
    document.getElementById("b").style.color = output;
    document.getElementById("c").style.color = output;

    document.getElementById("index9").style.color = output;
    document.getElementById("index10").style.color = output;
    document.getElementById("index11").style.color = output;
    document.getElementById("index12").style.color = output;

    document.getElementById("list").style.color = output;
    output = ""
}
function Searchbox(){
    //
    selectElement = 
          document.querySelector('#Search');
    output = selectElement.value;
       // above borrowed from https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/

    if(output=="default"){
        output = "black";
    }
   
    document.getElementById("Button").style.color = output;
    document.getElementById("Button1").style.color = output;

    document.getElementById("Search").style.color = output;
    
    document.getElementById("index1").style.color = output;
   

    document.getElementById("color").style.color = output;
    document.getElementById("index2").style.color = output;
   


    document.getElementById("index3").style.color = output;
   


    document.getElementById("index4").style.color = output;
  

    document.getElementById("index5").style.color = output;
   

    document.getElementById("index6").style.color = output;
    document.getElementById("index7").style.color = output;
    
    document.getElementById("index8").style.color = output;
    
    document.getElementById("Search").style.color = output;

    document.getElementById("a").style.color = output;
    document.getElementById("b").style.color = output;
    document.getElementById("c").style.color = output;

    document.getElementById("index9").style.color = output;
    document.getElementById("index10").style.color = output;
    document.getElementById("index11").style.color = output;
    document.getElementById("index12").style.color = output;

    document.getElementById("list").style.color = output;
   
   
   

    document.getElementById('Search').value = "";
    output = ""

 
}