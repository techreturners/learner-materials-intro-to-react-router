import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Confess from './components/Confess';
import Misdemeanour from './components/Misdemeanour';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/confess' element={<Confess />} />
        <Route path='/misdemeanour' element={<Misdemeanour />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
