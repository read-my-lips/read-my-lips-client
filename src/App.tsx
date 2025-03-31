import { Box } from '@mui/material'
import './App.css'
import Router from './routes/Router'

function App() {
  return (
    <Box sx = {{ flexGrow: 1 }}>
      <Router/>
    </Box>
  )
}

export default App
