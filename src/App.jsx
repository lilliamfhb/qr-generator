// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-8 col-lg-8'>
                <h1 className='title mb-5 text-center'>
                  <span className='me-2'>
                    <img src={reactLogo} alt="" />
                    <img src={viteLogo} alt="" />
                  </span> 
                  <span>
                    QRCODE
                  </span>
                </h1>
                <form action="" className='form-group d-flex'>
                  <div className='input-group'>
                    <input placeholder='Enter an URL' type="text"  className='w-100 h-100'/>
                  </div>
                  <button>
                    QR code
                  </button>
                </form>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
