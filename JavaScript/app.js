var username = prompt("Please enter your name");
alert("Hi "+ username);
document.write("<h4>Hi "+username+", I'm Hiba.. nice to meet you</h4>");

var sex = prompt("You are a Boy or a Girl?");

if(sex=="Boy"){
  document.write("<h4> but I'm a girl</h4>");
}else if(sex=="Girl"){
  document.write("We are both girls");
}else{
  document.write("I don't know if you are a girl or a boy");
}
function myFunction() {
  var r = confirm("Change the background?");
  if (r == true) {
    document.body.style.backgroundColor = "powderblue";
  }
  
}
document.write("<h4>I'm Excited to find out more about you in the coming times </h4>");
