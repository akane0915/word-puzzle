$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#stringInput").val().split("");
    var vowels = ["a","e","i","o","u"];
    console.log(userInput);

    for(var i=0; i<userInput.length; i++){
      vowels.forEach(function(vowel){
        if(userInput[i] === vowel){
          userInput.splice(i,1,"-");
        };
      });
      console.log(userInput[i]);
    }



  });


});
