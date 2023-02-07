import React from 'react'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import data from './data'

export default function App(){
    const cards = data.map(item => {
        return <Card
                key={item.id}
                item={item}
                />
    }) 
    return(
        <div>
            <Navbar />
            <Hero />
            
            <section className="card--list">
                {cards}
            </section>
        </div>
    ) 
}