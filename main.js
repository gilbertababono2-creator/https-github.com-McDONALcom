let btn = document.getElementById("btn");

let isVisible = false;

btn.addEventListener('click',function(){
  if(isVisible) {
    showLinks();
  }else{
    hideLinks();
  }
  isVisible = !isVisible
}) 

function hideLinks(){
  document.getElementById("links").style.display = "none";
}
function showLinks(){
  document.getElementById("links").style.display= "block";
}
 
 