import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<ListaProdutos/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
