import { useState } from 'react'
import './App.css'

function App() {
  
  const [HTTPCode, setHTTPCode] = useState('100')
  const [inputData, setInputData] = useState('100')
  const handleClick = (event: { preventDefault: () => void }) => {

    if(inputData) {

      event.preventDefault()
      setHTTPCode(inputData)
    }
  }

  return (
    <>
       <main className="App">
        <div className="wrapper">
          <img className="img" src={`https://http.cat/${HTTPCode}`} alt="random http images whit codes" />
        </div>

        <div className="wrapper">
          <form>
            <label className='label' htmlFor="inputText">Digite um código de 3 números</label>
            <input id="inputText" minLength={3} maxLength={3} type="text" required onChange={(e) => setInputData(e.target.value)} placeholder='algum código http'/>

            <button onClick={handleClick}>Enviar</button>
          </form>
        </div>
      </main>
    </>
   
      )
}
export default App
