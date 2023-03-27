import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'

const Instruction = () => {
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
        <Link href="/juegoplay">
          <button> Jugar </button>
        </Link>
      </span>
    </div>
  )
}

export default Instruction
