import { useState } from 'react'
import DataPage from './components/DataPage'
import { Typography } from '@mui/material'
import AdminPanel from './components/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataPage />
      <AdminPanel />
    </>
  )
}

export default App
