document.getElementById("index2").style.background = "aqua";
document.getElementById("index3").style.background = "aqua";
document.getElementById("index4").style.background = "aqua";
document.getElementById("index5").style.background = "aqua";
document.getElementById("Button").style.background = "aqua";

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
 
   

    document.getElementById("color").style.color = output;
    document.getElementById("index2").style.color = output;
   


    document.getElementById("index3").style.color = output;
   


    document.getElementById("index4").style.color = output;
  

    document.getElementById("index5").style.color = output;
   

    document.getElementById("index6").style.color = output;
    document.getElementById("index7").style.color = output;
    document.getElementById("index8").style.color = output;
    
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
 
    document.getElementById("index1").style.color = output;

    document.getElementById("color").style.color = output;
    document.getElementById("index2").style.color = output;
   


    document.getElementById("index3").style.color = output;
   


    document.getElementById("index4").style.color = output;
  

    document.getElementById("index5").style.color = output;
   

    document.getElementById("index6").style.color = output;
    document.getElementById("index7").style.color = output;
    document.getElementById("index8").style.color = output;
   

    document.getElementById('Search').value = "";

 
}