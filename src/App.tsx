import { BrowserRouter } from 'react-router-dom'
import RouterView from './Routes'
import Globalstyle from './styles/Globalcss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Globalstyle />
        <RouterView />
      </BrowserRouter>
    </>
  )
}

export default App
