import React from 'react'
import './EspanaContainer.css'

const EspanaContainer = (props) => {
  return (
    <section className='jugadores_section'>
        <h1 className='jugadores_title'>Jugadores:</h1>
        <div className='jugadores_container'>
        {props.children}
        </div>
    </section>
  )
}

export default EspanaContainer
