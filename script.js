var x = 5;
var gravity = 200;
var a = setInterval(fall, gravity);
var score = 0;

function gamegenerater()
{
	var gameBoard = document.createElement('table');
  

  for(i=1; i < 10; i++)
  {
    var tableRow = document.createElement('tr');

    for(j=1; j < 10; j++)
    {
      var tableCell = document.createElement('td');
      tableCell.setAttribute("id","cell"+j+'-'+i);
      tableCell.setAttribute("class","board_cell");
      tableRow.appendChild(tableCell);

    }
    
    if(i == 9)
    {
      tableRow.setAttribute('style','border-bottom:1px blue');
    }

    gameBoard.appendChild(tableRow);
  }

  document.getElementById('gameborders').appendChild(gameBoard);

  document.getElementById('cell'+x+'-8').classList.add('Player');
  food();
}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       document.getElementById('cell'+x+'-8').classList.remove('Player');
       x = x - 1;
       if(x == 0)
       {x = x + 1}
       document.getElementById('cell'+x+'-8').classList.add('Player');
    }
    else if (e.keyCode == '39') {
        document.getElementById('cell'+x+'-8').classList.remove('Player');
        x = x + 1;
        if(x == 10)
        {x = x - 1}
        document.getElementById('cell'+x+'-8').classList.add('Player');
    }

}

function fall() {
  document.getElementById('cell'+fx+'-'+fy).classList.remove('food');
  fy = fy + 1;
  if(fy==4)
  {
    
  }
  if(fx==x&&fy==8)
      {
        document.getElementById('cell'+fx+'-'+fy).classList.remove('food'); 
        score = score + 1;
        document.getElementById("score").innerHTML = "Score: " + score;
        food();    
      } else {
        document.getElementById('cell'+fx+'-'+fy).classList.add('food');
      };
  if(fy==9)
  {
    gameover();
  }
}

function food() {
    var n = Math.floor(Math.random() * 9);
    if(n==0){
    fx = 1;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');
  }
    
    if(n==1){
    fx = 2;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==2){
    fx = 3;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==3){
    fx = 4;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}
    
    if(n==4){
    fx = 5;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==5){
    fx = 6;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==6){
    fx = 7;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==7){
    fx = 8;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}

    if(n==8){
    fx = 9;
    fy = 1;
    document.getElementById('cell'+fx+'-'+fy).classList.add('food');}
}

function gameover() {
  alert("You lost. Your score was "+score+".");
  location.reload()
}