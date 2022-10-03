import React from 'react'
import { Table } from './components'
const App = () => {
  const appStyle = "bg-[#060606] rounded-[10px] p-[10px] bg-gray-700 shadow-lg shadow-gray-700/50"
  return (
    <div className={appStyle}>
    <header>DEPARTURES</header>
    <Table/>
  </div>
  )
}

export default App