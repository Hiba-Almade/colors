
// Enter user name..
// var username = prompt("Please enter your name");
// alert("Hi "+ username);

// A puzzle to find out my name
var myname = prompt('Can you expect my name? Choose one (Ahmed, Hiba, Mazen, Sally)');
while(myname != 'Hiba') {
  myname = prompt('No, try again.. Choose one (Ahmed, Heba, Mazen, Sally)');
}
alert('Well done, my name is Hiba');


document.write("<h4>Hi dear I'm Hiba.. nice to meet you</h4>");

// Knowing the gender of the user
// var sex = prompt("You are a Boy or a Girl?");
// if(sex=="Boy"){
//   document.write("<h4> but I'm a girl</h4>");
// }else if(sex=="Girl"){
//   document.write("We are both girls");
// }else{
//   document.write("I don't know if you are a girl or a boy");
// }

document.write("<h4>I'm Excited to find out more about you in the coming times </h4>");

// Find out the user's preferred season
var season = prompt("Do you like winter or summer? Enter 0 if you like winter, or 1 if you like summer");
while(season !=0 && season !=1) {
  season = prompt("invalid value! Enter 0 if you like winter, or 1 if you like summer");
}

//Show pictures of your favorite season
if(season == 0){
  winter();
}else if(season ==1){
  summer();
}

//To change the background color
function myFunction() {
  var r = confirm("Change the background?");
  if (r == true) {
    document.body.style.backgroundColor = "powderblue";
  }
  
}

function winter(){
  document.write("<h3>Winter is my favorite season too, full of goodness, rain, and warm feelings near the fireplace </h3>");
  var countForWinter = prompt("How often do you want to repeat the image of Snowman?Choose between (1-5)");
  while(countForWinter <= 0 || countForWinter >5) {
  countForWinter = prompt("Please choose a valid value between (1-5)");
}
  for(var i = 0; i < countForWinter; i++) {
  document.write('<img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-smiling-cute-snowman-illustration-png-image_4756061.jpg" width="200" height="200" />');
  }
}

function summer(){
  document.write("<h3>Summer is a great season for visiting the beach and swimming, full of sun</h3>");
  var countForSummer = prompt("How often do you want to repeat the image of Sun? Choose between (1-5)");
  while(countForSummer <= 0 || countForSummer > 5) {
  countForSummer = prompt("Please choose a valid value between (1-5)");
}
  for(var i = 0; i < countForSummer; i++) {
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHfLkm1e_9H3xzk-lHVhUIujILNxMsZulMDuqhgKdQedtUt1vjUL3RDD_JqLJFNZoeIU&usqp=CAU" width="200" height="200" />');
}
}
