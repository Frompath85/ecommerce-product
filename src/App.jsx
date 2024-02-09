import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { CartProvider } from "./components/DataContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home /> }> </Route>
        </Routes>
      </CartProvider>
    </Router>
  )
}
export default App