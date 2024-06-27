import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Header() {
  return (
    <div className="header">
      <p>MyFinance</p>
      <div className='nav'> 
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/transacoes">Transações</Link></ul>
      </div>
    </div>
  )
}

export default Header