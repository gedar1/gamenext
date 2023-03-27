import React, { useEffect, useMemo, useState } from 'react'
import styles from './index.module.css'
const Game = () => {
  const [gamePlayerOne, setGamePlayerOne] = useState<number>(0)
  const [pointsPlayerOne, setPointsPlayerOne] = useState<number>(0)
  const [pointsPlayerTwo, setPointsPlayerTwo] = useState<number>(0)
  const [win, setWin] = useState<string>('')
  const [isAvailable, setIsAvailable] = useState(false)
  const [totalPlayerOne, setTotalPlayerOne] = useState<any>([])

  const getNumber = () => {
    const min = 1
    const max = 12
    const playerOne = Math.floor(Math.random() * (max - min + 1) + min)
    setGamePlayerOne(playerOne)
    setTotalPlayerOne([...totalPlayerOne, playerOne])
  }
  const initGame = () => {
    getNumber()
  }
  const getStopPlayerOne = () => {
    setTimeout(() => {
      const min = 20
      const max = 31
      const playerTwo = Math.floor(Math.random() * (max - min + 1) + min)
      setPointsPlayerTwo(playerTwo)
    }, 1000)
  }

  const getTotalPoints = () => {
    const totalPoints = totalPlayerOne.reduce(
      (prev: number, current: number) => prev + current,
      0
    )
    setPointsPlayerOne(totalPoints)
  }
  console.log(pointsPlayerOne)
  useEffect(() => {
    getTotalPoints()
  }, [totalPlayerOne])

  useEffect(() => {
    totalPlayerOne.length > 0 && setIsAvailable(true)
  }, [gamePlayerOne])

  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <h1> Game </h1>
          <button onClick={initGame} disabled={isAvailable}>
            iniciar
          </button>
          <button onClick={getNumber}>continuar</button>
          <button onClick={getStopPlayerOne}>parar</button>
        </div>
        <div className={styles.cardNumber}>
          <h1> You : {pointsPlayerOne}</h1>
        </div>
        <div className={styles.cardNumber}>
          <h1>{gamePlayerOne}</h1>
        </div>
        <div className={styles.cardNumber}>
          <h1>{win}</h1>
        </div>

        <div className={styles.cardNumberOtherPlayer}>
          <h1> Player Two {pointsPlayerTwo}</h1>
        </div>
      </div>
    </>
  )
}

export default Game
