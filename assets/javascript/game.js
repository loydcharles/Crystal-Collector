  

  $(document).ready(function() {
    var numberOfWins   = 0;
    var numberOfLoses  = 0;
    var score          = 0;
    var randomNumber   = 0;
    var blueSapphire   = 0;
    var emerald        = 0;
    var garnet         = 0;
    var yellowSapphire = 0;

    createRandomValue();   

   $("#Blue-Sapphire").click(function(event) {
      trackScore(blueSapphire);
    });  

    $("#Emerald").click(function(event) {
      trackScore(emerald);
    });  

    $("#Garnet").click(function(event) {
      trackScore(garnet);
    });  

    $("#Yellow-Sapphire").click(function(event) {
      trackScore(yellowSapphire);
    });

    function createRandomValue() { 
      score          = 0;
      randomNumber   = Math.floor(Math.random() * 50) + 20;
      $("#random").text(randomNumber);
      blueSapphire   = Math.floor(Math.random() * 10) + 1;
      emerald        = Math.floor(Math.random() * 10) + 2;
      garnet         = Math.floor(Math.random() * 10) + 3;
      yellowSapphire = Math.floor(Math.random() * 10) + 4;    
    }

    function checkWinner() {      
      if (randomNumber === score) {
        numberOfWins++;
        $("#wins").text("You've Won");
        $("#wins").append("Wins: " + numberOfWins);
        alert("You've Won");
        reset();
      }
      else if (score > randomNumber) {
        numberOfLoses++;
        $("#loses").text("Loses: " + numberOfLoses);
        alert("You've lost");

        reset();
      }
        $("#wins").text(numberOfWins);
        $("#loses").text(numberOfLoses);      
    };
    
    function trackScore(crystalValue) {
      score = score + crystalValue;
      $("#score").text(score);
      checkWinner();
    }
  
    function reset() {       
      $("#score").empty();
      alert("Game is being RESET for new Game");
      createRandomValue();
    }

  });