// Set Up Components and Var
const React = require("react");
const Square = require("./Squares.jsx");
const calculate = require("./utils/calculateWinner.js");
var text = '';


// Main Function
const main = function(){

  // getState
  const [player, setPlayer] = React.useState(true);
  const [name, setName] = React.useState("X");
  const [table, setTable] = React.useState([0,0,0, 0,0,0, 0,0,0]);
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
    if (player == true){
      setName('X');
      text = 'O';
    }else if (player == false){
      setName('O');
      text = 'X';
    }
    if (id == 0){
      if (sym0 == ''){
        setSym0(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 1){
      if (sym1 == ''){
        setSym1(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 2){
      if (sym2 == ''){
        setSym2(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 3){
      if (sym3 == ''){
        setSym3(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 4){
      if (sym4 == ''){
        setSym4(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 5){
      if (sym5 == ''){
        setSym5(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 6){
      if (sym6 == ''){
        setSym6(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 7){
      if (sym7 == ''){
        setSym7(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }else if (id == 8){
      if (sym8 == ''){
        setSym8(text);
        if (text == 'X'){
          setTable[id] = 3;
        }else if (text == 'O'){
          setTable[id] = 5;
        }
      }
    }
  }

  const printText = (id) =>{
    changePlayer(id);
    console.log(`the player right now is ${name} and the text is ${text}, id is ${id}`);
  }
// getEffect
  React.useEffect(() =>{
    document.title = `It's player ${name}'s turn.`;

    for (let i = 0; i <= 2; i++){
      const new_i = (i%3) * 3;
      // check for x
      if ((table[new_i] + table[new_i+1] + table[new_i+2]) === 9 || (table[i] + table[i+3] + table[i+6]) === 9){
        // Winner function
        setWinner("The winner is X");
        //gameover
      }
      //check for o
      if ((table[new_i] + table[new_i+1] + table[new_i+2]) === 15 || (table[i] + table[i+3] + table[i+6]) === 15){
        //Winner function
        setWinner("The winner is O");
        //gameover
      }
    }
    if ((table[0] + table[4] + table[8]) === 15 || (table[2] + table[4] + table[6]) === 15 ){
      setWinner("The winner is O");
      //gameover
    }
    if ((table[2] + table[4] + table[6]) === 9 || (table[0] + table[4] + table[8]) === 9){
      setWinner("The winner is X");
      //gameover
    }
    // check if table completed
    if (table.indexOf(0) === -1){
      setWinner("Tie! There is no winner");
      //gameover
    }
  }, [table]);

// return
  return (
    <div>
      <h1 className="hihihi">Tic Tac Toe</h1>
      <p> It's player {name} and {sym0}'s turn.</p>
      
      <Square items = {sym0} draw = {printText} id = {0}/> 
      <Square items = {sym1} draw = {printText} id = {1}/>
      <Square items = {sym2} draw = {printText} id = {2}/>
      <br/>
      <Square items = {sym3} draw = {printText} id = {3}/>
      <Square items = {sym4} draw = {printText} id = {4}/>
      <Square items = {sym5} draw = {printText} id = {5}/>
      <br/>
      <Square items = {sym6} draw = {printText} id = {6}/>
      <Square items = {sym7} draw = {printText} id = {7}/>
      <Square items = {sym8} draw = {printText} id = {8}/>

      <h3>{winner}</h3>
    </div>

  );// <button onClick={() => setPlayer(player)} >click to change</button>
}

//export
module.exports = main;