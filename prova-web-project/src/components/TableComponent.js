import React from 'react'
import '../styles/page.css'
import { lista } from '../assets/data/list'


function Table() {
  const renderTable = () => {
    return lista.map((item) => {
      return (
        <tr key={item.codigo}>
          <td>{item.descricao}</td>
          <td>{item.entrada}</td>
          <td>{item.saida}</td>
          <td>{item.total}</td>
        </tr>
      )
    })
  }

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Descricão</th>
        <th>Entrada</th>
        <th>Saida</th>
        <th>Total</th>
      </tr>
    )
  }

  const renderTableBody = () => {
    return (
      <tbody>
        {renderTable()}
      </tbody>
    )
  }

  return (
    <>
    <div className='transacoes'>
      <h1>Transações</h1>
      <table className='table'>
        <thead>
          {renderTableHeader()}
        </thead>
        {renderTableBody()}
      </table>
    </div>
    </>
  )
}

export default Table