import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setCards(data))
  }, [])

  return (
    <>
      <section id="center">
       {cards.map(card => {
        // return <Card key={card.id} card={card}/>
        return <div key={card.id} className="m-4 border border-1 border-purple-400 font-bold p-4 rounded-lg font-sans">

          <div className="card text-blue-400">{`userId: ${card.userId}`}</div>
          <div className="card text-red-400">{`title: ${card.title}`}</div>
          <div className="card text-green-400">{`body: ${card.body}`}</div>
        </div>
      })}

      </section>
    </>
  ) 
}

export default App
