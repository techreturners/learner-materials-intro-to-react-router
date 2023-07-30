import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Confess from './components/Confess';
import Misdemeanours from './components/Misdemeanours';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/confess' element={<Confess />} />
        <Route path='/misdemeanours' element={<Misdemeanours />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
