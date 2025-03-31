import { Box, ThemeProvider } from '@mui/material'
import './App.css'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import theme from './common/theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <Router />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
