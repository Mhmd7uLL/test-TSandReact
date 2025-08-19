import { useState } from 'react'
import tokopedia from './assets/tokped.jpeg'
import shopee from './assets/shopee.jpeg'
import lazada from './assets/lazada.png'
import './App.css'

function App() {
  const [countT, setCountT] = useState(0)
  const [countS, setCountS] = useState(0)
  const [countL, setCountL] = useState(0)

  if (countT < 0 || countS < 0 || countL < 0) {
    alert('Must higher than 0')
  }

  return (
    <>
      <h1>Berikan penilaian terhadap e-commerce di bawah</h1>
      
      <main>
        <div className="app">
          <img src={tokopedia} alt="tokopedia" />
          <div className="card">
            <button onClick={() => setCountT((countT) => countT - 1)}>-</button>
            <input type="text" value={countT} />
            <button onClick={() => setCountT((countT) => countT + 1)}>+</button>
          </div>
        </div>
        <div className="app">
          <img src={shopee} alt="shopee" />
          <div className="card">
            <button onClick={() => setCountS((counts) => counts - 1)}>-</button>
            <input type="text" value={countS} />
            <button onClick={() => setCountS((counts) => counts + 1)}>+</button>
          </div>
        </div>
        <div className="app">
          <img src={lazada} alt="shopee" />
          <div className="card">
            <button onClick={() => setCountL((countl) => countl - 1)}>-</button>
            <input type="text" value={countL} />
            <button onClick={() => setCountL((countl) => countl + 1)}>+</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
