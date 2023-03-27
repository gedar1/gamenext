import React from 'react'
import Instruction from '../../../components/Instructions/index'
import styles from '@/styles/Home.module.css'

const Game = () => {
  return (
    <>
      <div className={styles.main}>
        <Instruction />
      </div>
    </>
  )
}

export default Game
