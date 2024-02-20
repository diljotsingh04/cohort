import { useEffect, useState } from 'react'

function App() {

  const[length, setLength] = useState(0);
  const[para, setPara] = useState("Enter the prompt to proceed");

  
  const generatePara = ()=>{
    if(length > 0){
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        let words = [];
        for(let i=0; i<length; i++){
          let word = "";
          for(let j=0; j<(Math.floor(Math.random() * 7)+1); j++){
            word += alphabets[Math.floor(Math.random() * 26)];
          }
          words.push(word);
        }
        setPara(words.join(' '));
    }
    else{
      setPara("Length should be greater than zero");
    }
  }
  
  return (
    <>
      <input type="number" onChange={(e)=>setLength(e.target.value)} value={length==0? "" : length} placeholder='Enter the length of para'/>
      <button onClick={generatePara}>Generate</button>
      <div className="displaypara">{para}</div>
    </>
  )
  
}

export default App
