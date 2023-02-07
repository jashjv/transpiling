import { useState } from "react";
import ReactDOM from "react-dom";


const App = () => {
    const [input, setinput] = useState('')
    const [code ,setCode]=useState('')
  
    const onclick = () => {
      console.log(input)
    }

  
  
    return (
      <div >
        <textarea value={input} onChange={e => setinput(e.target.value)} ></textarea>
        <div>
         <button onClick={onclick}>submit</button>  
        </div>
        <pre>{code}</pre>
      </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'))