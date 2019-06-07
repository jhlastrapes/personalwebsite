/*eslint-disable*/

function myFunction(){
	var element = document.getElementById("elem");
	var desiredPosition = 500;
	if(window.pageYOffset >= desiredPosition){
      element.style.cssText += "position: fixed; top: auto; bottom: 20px; right: 20px; left: auto;"; 
  }
  else {
    element.style.cssText += "position: relative; top: 20px; bottom: auto; right: auto; left: 20px;";  
  } 
}