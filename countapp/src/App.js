import { useState } from 'react';
import './App.css';

function App(){
  let count = 0;
  const [count2, setCount] = useState(0)
  const increase = () => {
    // console.log('count:',count+=1, 'count2:', count2)
    setCount(count2+1)
  }
  return(
    <>
      <div>{count2}</div>
      <button onClick={increase}>버튼</button>
    </>
  )
}
export default App;