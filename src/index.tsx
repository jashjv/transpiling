import * as esbuild from 'esbuild-wasm'
import { useEffect, useState,useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [input, setinput] = useState('')
  const [code, setCode] = useState('');

const ref=useRef<any>()

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    })
   
  }

  useEffect(() => {
    startService()
  }, [])

  const onclick = async () => {
    if (!ref.current) {
      return;
    }
    const result =await ref.current.transform(input, {
      loader: 'jsx',
      target: 'es2015',
    });
    setCode(result.code)
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

ReactDOM.render(<App />, document.getElementById('root'))