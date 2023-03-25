import React from 'react'
import styles from './index.module.css'

const Intruction = () => {
  return (
    <div className={styles.containerItems}>
      <h1>Instrucciones</h1>
      <p className={styles.pLorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita
        quo a ipsum incidunt perferendis, rerum error soluta ad unde, illo id
        laudantium. Sapiente excepturi commodi perferendis voluptate blanditiis
        nam.
      </p>
      <span>
        <button> Jugar </button>
      </span>
    </div>
  )
}

export default Intruction
