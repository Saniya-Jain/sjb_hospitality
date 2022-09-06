
document.getElementById("heading1").addEventListener("mouseover", mouseOver);
document.getElementById("heading1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("heading1").style.color = "darkgreen";
}

function mouseOut() {
  document.getElementById("heading1").style.color = "black";
}


function Thank_you() {
	alert("Thank you for hanging out with us" );
}

function offers(){
  document.getElementById("offer").innerHTML = "ONE TIME MEAL ON US IF YOU STAY FOR MORE THAN 3 DAYS!";
  document.getElementById("offer1").innerHTML = "*Mention the number of days when you send us an enquiry*";
  //alert("Enjoy")
}