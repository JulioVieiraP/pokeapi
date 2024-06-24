import { BrowserRouter } from 'react-router-dom'
import RouterView from './Routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </>
  )
}

export default App
