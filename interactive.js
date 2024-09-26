const color = ["violet", "green", "aqua","AliceBlue","Bisque","BlueViolet","Crimson","Gainsboro","LightCoral","MediumAquaMarine","black"
    ,"PaleTurquoise","Sienna","Silver","Turquoise","ForestGreen","FloralWhite","DarkTurquoise","Chocolate","BlanchedAlmond","LightPink","LightSalmon","red","Green","Blue",
    "Aqua","purple","Orange","Pink","Yellow","Blue"];

const background = ["red","Green","Blue","purple"]
const randomback=Math.floor(Math.random() * background.length);

const randomint=Math.floor(Math.random() * color.length);
document.getElementById("index").style.color = color[randomint];
document.getElementById("index2").style.color = color[randomint];
document.getElementById("index3").style.color = color[randomint];
document.getElementById("index4").style.color = color[randomint];
document.getElementById("index5").style.color = color[randomint];
document.getElementById("index6").style.color = color[randomint];
document.getElementById("index7").style.color = color[randomint];
document.getElementById("index8").style.color = color[randomint];
document.getElementById("index9").style.color = color[randomint];
document.getElementById("index10").style.color = color[randomint];
document.body.style.backgroundColor =background[randomback];







