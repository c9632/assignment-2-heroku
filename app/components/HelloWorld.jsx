// Set Up Components and Var
const React = require("react");
const Square = require("./Squares.jsx");
var text = '';
var table = [0,0,0, 0,0,0, 0,0,0];

// Main Function
const main = function(){

  // getState
  const [player, setPlayer] = React.useState(true);
  const [name, setName] = React.useState("It's player O's turn.");
  const [winner, setWinner] = React.useState("")

  const [sym0, setSym0] = React.useState('');
  const [sym1, setSym1] = React.useState('');
  const [sym2, setSym2] = React.useState('');
  const [sym3, setSym3] = React.useState('');
  const [sym4, setSym4] = React.useState('');
  const [sym5, setSym5] = React.useState('');
  const [sym6, setSym6] = React.useState('');
  const [sym7, setSym7] = React.useState('');
  const [sym8, setSym8] = React.useState('');

  const changePlayer = (id) => {
    setPlayer(!player);
    procSym(player,id);
  }

  const procSym = (player,id) => {
    console.log(`The id num right now is ${id}, text is ${text} `);
    if (player == true && winner == ''){
      setName("It's player X's turn.");
      text = 'O';
      table[id] = 5;
    }else if (player == false && winner == ''){
      setName("It's player O's turn.");
      text = 'X';
      table[id] = 3;
    }else{
      setPlayer("");
    }
    
    if (id == 0){
      if (sym0 == '' && winner == ''){
        setSym0(text);
      }
    }else if (id == 1 && winner == ''){
      if (sym1 == ''){
        setSym1(text);
      }
    }else if (id == 2 && winner == ''){
      if (sym2 == ''){
        setSym2(text);
      }
    }else if (id == 3 && winner == ''){
      if (sym3 == ''){
        setSym3(text);
      }
    }else if (id == 4 && winner == ''){
      if (sym4 == ''){
        setSym4(text);
      }
    }else if (id == 5 && winner == ''){
      if (sym5 == ''){
        setSym5(text);
      }
    }else if (id == 6 && winner == ''){
      if (sym6 == ''){
        setSym6(text);
      }
    }else if (id == 7 && winner == ''){
      if (sym7 == ''){
        setSym7(text);
      }
    }else if (id == 8 && winner == ''){
      if (sym8 == ''){
        setSym8(text);
      }
    }
  }

  const printText = (id) =>{
    changePlayer(id);
    console.log(`the player right now is ${name}, id is ${id}`);

    for (let i = 0; i <= 2; i++){
      const new_i = (i%3) * 3;
      // check for x
      if ((table[new_i] + table[new_i+1] + table[new_i+2]) === 9 || (table[i] + table[i+3] + table[i+6]) === 9){
        // Winner function
        setWinner("The winner is X!!");
        setName("");
        gameOver();
      }
      //check for o
      if ((table[new_i] + table[new_i+1] + table[new_i+2]) === 15 || (table[i] + table[i+3] + table[i+6]) === 15){
        //Winner function
        setWinner("The winner is O!!");
        setName("");
        gameOver();
      }
    }
    //check for o
    if ((table[0] + table[4] + table[8]) === 15 || (table[2] + table[4] + table[6]) === 15 ){
      setWinner("The winner is O!!");
      setName("");
      gameOver();
    }
    //check for x
    if ((table[2] + table[4] + table[6]) === 9 || (table[0] + table[4] + table[8]) === 9){
      setWinner("The winner is X!!");
      setName("");
      gameOver();
    }
    // check if table completed
    if (table.indexOf(0) === -1){
      setWinner("Tie! There is no winner!");
      setName("");
      gameOver();
    }
  }
  const reset = () => {
    gameOver();
    setName("It's player O's turn.");
    setWinner("");
    setPlayer(true);
    setSym0("");
    setSym1("");
    setSym2("");
    setSym3("");
    setSym4("");
    setSym5("");
    setSym6("");
    setSym7("");
    setSym8("");
    text = '';
  }

  const gameOver = () =>{
    table = [0,0,0, 0,0,0, 0,0,0];
  }
// getEffect
  React.useEffect(() =>{
    document.title = `It's player ${name}'s turn.`;
  });

// return
  return (
    <div className= "fonty">
      <h1 className="hihihi">Tic Tac Toe</h1>

      <p> {name}</p>
      <h3>{winner}</h3>
      <div className = "row">
        <Square items = {sym0} print = {printText} id = {0}/> 
        <Square items = {sym1} print = {printText} id = {1}/>
        <Square items = {sym2} print = {printText} id = {2}/>
      </div>
      <div className = "row">
        <Square items = {sym3} print = {printText} id = {3}/>
        <Square items = {sym4} print = {printText} id = {4}/>
        <Square items = {sym5} print = {printText} id = {5}/>
      </div>
      <div className = "row">
        <Square items = {sym6} print = {printText} id = {6}/>
        <Square items = {sym7} print = {printText} id = {7}/>
        <Square items = {sym8} print = {printText} id = {8}/>
      </div>
      <button className = "resetBtn" onClick = {reset} >Reset Game</button>
    </div>

  );
}

//export
module.exports = main;