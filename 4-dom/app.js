/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//...V1.0

//var scores, roundScore, activePlayer, dice;
//
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 1;
//
//dice = Math.floor(Math.random() * 6) +1;
//
//
//
//document.querySelector('#current-' + activePlayer).textContent = dice;
////document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';  
//
//var x = document.querySelector('.dice').textContent;
//console.log(x);
//
//document.querySelector('.dice').style.display = 'none';
//
//////Using normal function 
////
////function btn(){
////     //Do something here
////}
////
////btn();
////
////document.querySelector('.btn-roll').addEventListener('click', btn);
//
//
////Using anominus function 
////
//
//document.querySelector('.btn-roll').addEventListener('click', function(){
//     
//});

//...V2.0

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying ;

function init() {
     scores = [0, 0];
     roundScore = 0;
     activePlayer = 0;
     gamePlaying = true;
     
     document.querySelector('.dice').style.display = 'none';

     document.getElementById('score-0').textContent = '0';
     document.getElementById('score-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     
     document.getElementById('name-0').textContent = 'Player-1';
     document.getElementById('name-1').textContent = 'Player-2';
};
init();


////.....Botton-Roll

document.querySelector('.btn-roll').addEventListener('click', function(){
     
     if (gamePlaying){
          
               // 1. Random number.
          var dice = Math.floor(Math.random() * 6) +1;

          // 2. Display the result.
          var diceDom = document.querySelector('.dice');

          diceDom.style.display = 'block';
          diceDom.src = 'dice-' + dice + '.png';

          // 3. Update the round score If the rolled number was NOT a 1.
          if (dice !== 1) {
               // Add score

               roundScore += dice;
               document.querySelector('#current-' + activePlayer).textContent = roundScore;
          }else {
               //Next Player
               nextPlayer();
          }
     }
});

function nextPlayer(){
     
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;
          
          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';
          
          document.querySelector('.dice').style.display = 'none';
          
//          document.querySelector('.player-0-panel').classList.remove('active');
//          document.querySelector('.player-1-panel').classList.add('active');

          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
}


/////.....Botton-Hold......

document.querySelector('.btn-hold').addEventListener('click', function(){
     
    if(gamePlaying){
          scores[activePlayer] += roundScore;
          
          document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

          if (scores[activePlayer] >= 30){
               gamePlaying = false;
               document.getElementById('name-' + activePlayer).textContent = 'The Winner';
               document.querySelector('.dice').style.display = 'none';
          }else {
               nextPlayer();
          } 
    }
});


//....Start New Game............

document.querySelector('.btn-new').addEventListener('click', init);