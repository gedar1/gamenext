import React from 'react'
import styles from '@/styles/Home.module.css'
const Game = () => {
  return (
    <>
      <div className={styles.main}>
        <h1> Game </h1>
        <button>iniciar</button>
        <button>continuar</button>
        <button>parar</button>
      </div>
    </>
  )
}

export default Game
