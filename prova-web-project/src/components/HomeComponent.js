import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import { lista } from '../assets/data/list'

function HomeComponent() {
  const [transacoes, setTransacoes] = useState([])
  const [totalEntradas, setTotalEntradas] = useState(0)
  const [totalSaidas, setTotalSaidas] = useState(0)
  const [totalAtual, setTotalAtual] = useState(0)

  useEffect(() => {
    setTransacoes(lista)
  }, [])

  useEffect(() => {
    setTotalEntradas(transacoes.reduce((total, item) => total + item.entrada, 0))
    setTotalSaidas(transacoes.reduce((total, item) => total + item.saida, 0))
    setTotalAtual(transacoes.reduce((total, item) => total + item.total, 0))
  }, [transacoes])

  return (
    <div className="home"> 
        <h1>Home</h1>
        <div className='balance'>
            <p>Total Entradas: {totalEntradas} </p>
            <p>Total Saidas: {totalSaidas} </p>
            <p>Saldo Atual: {totalAtual}</p>
        </div>
    </div>
  )
}

export default HomeComponent