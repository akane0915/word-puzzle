$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#stringInput").val().split("");
    var vowels = ["a","e","i","o","u"];

    for(var i=0; i<userInput.length; i++){
      vowels.forEach(function(vowel){
        if(userInput[i] === vowel){
          userInput.splice(i,1,"-");
        };
      });
    }

    var wordPuzzle = userInput.join("");

    $("form").hide();
    $(".puzzle").show();
    $(".puzzleOutput").text(wordPuzzle);

    $("#reload").click(function(){
      location.reload();
    });

  });


});
