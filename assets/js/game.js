$(document).ready(function() {
    // Creating variables needed
      var goalScore = "";
      var userScore = "";
      var wins = 0;
      var losses = 0;
      var gameOver = false;
  
    //Creating new game function
    function newGame() {
      gameOver = false;
      
      // Generating a Random number between 29 and 120 for the Goal
      goalScore = Math.floor(Math.random() * 101) + 29;
  
      // Set user score to 0 by default
      userScore = 0;
  
      // Assigning random numbers to crystal between 1 and 15 using jQuery attr
        $('.crystal').each(function() {
          var value = Math.floor(Math.random() * 15) + 1;
            $(this).attr('data-value',value);
            $(this).attr('title',value);
        });
  
        $('.goalScore').html(goalScore);
        $('.userScore').html(userScore);
        $('.wins').html(wins);
        $('.losses').html(losses);
    };
  
    newGame();
  
    // Setting/ defining click events for crystals
      
    
      $('.crystal').on('click', function() {
        if (gameOver) {
          return;
        }
        if (userScore < goalScore){ // each click adds a value amount to user score
        userScore += parseInt($(this).attr('data-value'));  
        $('.userScore').html(userScore);
        };
        
        if (userScore === goalScore) {   // wins game if user score = goal score
          gameOver = true;
          // $('.crystal').off('click');
          wins++;
          $('.wins').html(wins);
        };
  
        if (userScore > goalScore) {  // lose game if user score > goal score
          gameOver = true;
          // $('.crystal').off('click');
          losses++;
          $('.losses').html(losses);
        };
      });
   
  
  
    $('.newGame').on('click', function(){ 
      newGame();
    });
  
    
  
  });