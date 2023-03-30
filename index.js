function scuberGreetingForFeet(value){
  if(400 >= value){
    return "This one is on me!";
  } else if (1500 >= value){
    return "That will be twenty bucks.";
  
  } else if (2001 >= value){
      return "I will gladly take your thirty bucks.";
  } else if (2501 >= value){
      return "No can do.";
  }
}


function ternaryCheckCity(city){
  if (city ==='NYC'){
    return 'Ok, sounds good.';
  }
  else if (city !== 'NYC'){
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
  case "generous": 
    return("Thank you so much.");
  case "not as generous":
    return("Thank you.");
  default:"if anything else"
    return("Bye.");
  
  }
}