function showPic(whichPic){
  var source = whichPic.getAttribute("href");
  var text=whichPic.getAttribute("title");
  var description=document.getElementById("description");
  var placeholder=document.getElementById("placeholder");
  description.firstChild.nodeValue=text;
  placeholder.setAttribute("src",source);
}

function countBodyChildren(){
  var body_element=document.getElementsByTagName("body")[0];
  console.log(body_element.childNodes.length);
}
//console.log();
window.onload=countBodyChildren;
