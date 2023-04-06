import { useState } from 'react'
import DataPage from './components/DataPage'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataPage />
    </>
  )
}

export default App
