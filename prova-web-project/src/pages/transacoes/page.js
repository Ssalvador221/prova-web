import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Table from '../../components/TableComponent'


function Page({props}) {
  return (
    <>
        <Header />
        <Table /> 
        <Footer />
    </>
  )
}

export default Page