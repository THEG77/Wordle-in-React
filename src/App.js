import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const words = ["GRAPE","MOVIE","DODGE", "SHAKE", "ROBIN", "ELDER", "SKILL", "PAUSE", "MOIST", "FRAME", "AHEAD", "ALONE", "RUPEE", "MONTH", "SWEET"];
  const [wordleWord, setWordleWord] = useState("")
  const [curColumn, setCurColumn] = useState(0);
  const [matchedArr, setMatchedArr] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])
  console.log(matchedArr);
  const [rowWord0, setRowWord0] = useState("");
  const [rowWord1, setRowWord1] = useState("");
  const [rowWord2, setRowWord2] = useState("");
  const [rowWord3, setRowWord3] = useState("");
  const [rowWord4, setRowWord4] = useState("");
  const [rowWord5, setRowWord5] = useState("");

  useEffect(()=>{
    
    setWordleWord(words[Math.floor(Math.random() * words.length)])
  },[])
  const checkColumnInput = (input, jugadooIndex) => {
    console.log("Current col: " + jugadooIndex);
    for(let i = 0;  i<input.length; i++){
      if(wordleWord.includes(input.charAt(i))){
        if(wordleWord.indexOf(input.charAt(i)) === i){
          let temparr = matchedArr;
          temparr[curColumn][i] = 1
          setMatchedArr(temparr)
        }
        else if(wordleWord.indexOf(input.charAt(i)) !== i){
          let temparr = matchedArr;
          temparr[curColumn][i] = 2
          setMatchedArr(temparr)
        }
        
      }
    }
    if(input === wordleWord){
      alert(`You Won... The Word was ${wordleWord}`)
    }
    if(jugadooIndex > 5 ){
      alert(`You LOST... The Word was ${wordleWord}`)
    }
  }
  const rowFunc = (curRowNum) => {
    let rowarr = [];
      
      if(curRowNum === 0){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[0][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord0[i]}</text></div>)
          }
          else if(matchedArr[0][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord0[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord0[i]}</text></div>)
          }
        }
      }
      else if(curRowNum === 1){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[1][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord1[i]}</text></div>)
          }
          else if(matchedArr[1][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord1[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord1[i]}</text></div>)
          }
        }
      }
      else if(curRowNum === 2){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[2][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord2[i]}</text></div>)
          }
          else if(matchedArr[2][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord2[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord2[i]}</text></div>)
          }
        }
      }
      else if(curRowNum === 3){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[3][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord3[i]}</text></div>)
          }
          else if(matchedArr[3][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord3[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord3[i]}</text></div>)
          }
        }
      }
      else if(curRowNum === 4){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[4][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord4[i]}</text></div>)
          }
          else if(matchedArr[4][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord4[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord4[i]}</text></div>)
          }
        }
      }
      else if(curRowNum === 5){
        for(let i = 0 ; i<5; i++){
          if(matchedArr[5][i] === 1){
            rowarr.push(<div className='row' style={{backgroundColor:"greenyellow"}}> <text className='letters'>{rowWord5[i]}</text></div>)
          }
          else if(matchedArr[5][i] === 2){
            rowarr.push(<div className='row' style={{backgroundColor:"brown"}}> <text className='letters'>{rowWord5[i]}</text></div>)
          }
          else{
            rowarr.push(<div className='row'> <text className='letters'>{rowWord5[i]}</text></div>)
          }
        }
      }
      
      return rowarr     
    }

  const handleInput = (val) => {
    if(val!= "Enter" && val!= "Backspace" && val!= "Tab "){
      val = val.toUpperCase()
    }
      if(curColumn === 0){
        let tempstr = rowWord0;
        if(val === 'Backspace'){
          setRowWord0(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord0.length===5){
            checkColumnInput(rowWord0, curColumn+1)
            setCurColumn((old)=>old+1)
          }
        }
        else if(rowWord0.length>=5){
          return
        }
        else{
          
          setRowWord0(tempstr.concat(val))
        }
      }
      else if(curColumn === 1){
        let tempstr = rowWord1;
        if(val === 'Backspace'){
          setRowWord1(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord1.length===5){
            checkColumnInput(rowWord1, curColumn+1)
            setCurColumn(curColumn+1)
          }
        }
        else if(rowWord1.length>=5){
          return
        }
        else{
          setRowWord1(tempstr.concat(val))
        }
      }
      else if(curColumn === 2){
         let tempstr = rowWord2;
        if(val === 'Backspace'){
          setRowWord2(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord2.length===5){
            checkColumnInput(rowWord2, curColumn+1)
            setCurColumn(curColumn+1)
          }
        }
        else if(rowWord2.length>=5){
          return
        }
        else{
          setRowWord2(tempstr.concat(val))
        }
      }
      else if(curColumn === 3){
         let tempstr = rowWord3;
        if(val === 'Backspace'){
          setRowWord3(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord3.length===5){
            checkColumnInput(rowWord3, curColumn+1)
            setCurColumn(curColumn+1)
          }
        }
        else if(rowWord3.length>=5){
          return
        }
        else{
          setRowWord3(tempstr.concat(val))
        }
      }
      else if(curColumn === 4){
         let tempstr = rowWord4;
        if(val === 'Backspace'){
          setRowWord4(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord4.length===5){
            checkColumnInput(rowWord4, curColumn+1)
            setCurColumn(curColumn+1)
          }
        }
        else if(rowWord4.length>=5){
          return
        }
        else{
          setRowWord4(tempstr.concat(val))
        }
      }
      else if(curColumn === 5){
         let tempstr = rowWord5;
        if(val === 'Backspace'){
          setRowWord5(tempstr.slice(0,-1))
        }
        else if(val === 'Enter'){
          if(rowWord5.length===5){
            checkColumnInput(rowWord5, curColumn+1)
            setCurColumn(curColumn+1)
          }
        }
        else if(rowWord5.length>=5){
          return
        }
        else{
          setRowWord5(tempstr.concat(val))
        }
      }
    // setCurWord((curWord)=> curWord.append(e) )
  }
  return (
    <div className="App" tabIndex="0" onKeyUp={(event)=> handleInput(event.key)} >
      <div className='maindiv' >
        <text className='titleText'> Wordle </text>
        <div className='column'>
          {rowFunc(0)}
        </div>
        <div className='column'>
          {rowFunc(1)}
        </div>
        <div className='column'>
          {rowFunc(2)}
        </div>
        <div className='column'>
          {rowFunc(3)}
        </div>
        <div className='column'>
          {rowFunc(4)}
        </div>
        <div className='column'>
          {rowFunc(5)}
        </div>
        <text style={{color: 'white'}}>{curColumn}</text>
      </div>
    </div>
  );
}

export default App;
