  

  $(document).ready(function() {
    var numberOfWins   = 0;
    var numberOfLoses  = 0;
    var randomNumber   = Math.floor(Math.random() * 50) + 20;
    var blueSapphire   = Math.floor(Math.random() * 10) + 1;
    var emerald        = Math.floor(Math.random() * 10) + 2;
    var garnet         = Math.floor(Math.random() * 10) + 3;
    var yellowSapphire = Math.floor(Math.random() * 10) + 4;

   $("#random").text(randomNumber);

   $("#Blue-Sapphire").click(function(event) {
      randomNumber -= blueSapphire;
      checkWinner();
    });  

    $("#Emerald").click(function(event) {
      randomNumber -= emerald;
      checkWinner();
    });  

    $("#Garnet").click(function(event) {        
      randomNumber -= garnet;
      checkWinner();
    });  

    $("#Yellow-Sapphire").click(function(event) {
      randomNumber -= yellowSapphire;
      checkWinner();
    });

    function checkWinner() {
      $("#random").text(randomNumber);
      if (randomNumber == 0) {
        numberOfWins++;
        $("#wins").text("Wins: " + numberOfWins);
      }
    else if (randomNumber < 0) {
      numberOfLoses++;
      $("#loses").text("Loses: " + numberOfLoses);
      }
    };
    
  });