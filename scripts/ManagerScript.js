var showBtn = document.getElementById("showBtn");
var targetBackgoundOne = document.getElementById("backgroundOne");
var targetBackgoundTwo =  document.getElementById("backgroundTwo");
var flag = 0;//for knowing if the second background has been viewed or not


//make anmiation of first background from (showBtn)
function doAnimation() {

    targetBackgoundOne.classList.add("animationOne");
    //disable start btn after pressing it
    showBtn.style.visibility="hidden";
    targetBackgoundTwo.classList.add("textAnimation");

    //if second background is viewed before then remove its class
    if(flag == 1) {
      targetBackgoundOne.classList.remove("animationTwo");
      
    }
 }

//coming back animation of first background from (closeBtn)
function backAnimation() {

   targetBackgoundOne.classList.add("animationTwo");
   targetBackgoundOne.classList.remove("animationOne");

//mark seond background as viewed at least once   
   flag = 1;

   //return start btn
  showBtn.style.visibility="visible"; 
 
  targetBackgoundTwo.classList.remove("textAnimation");

}