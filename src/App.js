import { useState, useEffect } from 'react'

import './App.css'

function App () {
  const [joke, setJoke] = useState({})
  const [isReveal, setIsReveal] = useState(false)

  const btnHandler = () => {
    if (!isReveal) {
      setIsReveal(true)
    } else {
      fetchJoke()
      setIsReveal(false)
    }
  }
  const fetchJoke = async () => {
    return await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart').then(res=> res.json).then(jokeData => setJoke(jokeData)).catch(err => console.log(err))
  }
  // const fetchJoke = async () => {
  //   return await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
  //     .then(res => res.json())
  //     .then(joke => setJoke(joke))
  //     .catch(err => console.log(err))
  // }

  useEffect(() => {
    fetchJoke()
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='main-title'>Programmers Jokes</h1>
        <h2>{joke.setup}</h2>
        <div className='delivery-box'>

          {
          isReveal
            ? (
              <>
                <div>{joke.delivery}</div>

              </>
              )
            : (
              <div>Push the button!</div>
              )
          }
          <button className='btn' onClick={btnHandler}>{isReveal ? 'Reveal' : 'Refresh'}</button>

        </div>
      </header>
    </div>
  )
}

export default App
