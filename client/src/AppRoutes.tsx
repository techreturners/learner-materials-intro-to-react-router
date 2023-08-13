import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Confess from './components/Confess';
import Misdemeanours from './components/Misdemeanours';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='confess' element={<Confess />} />
        <Route path='misdemeanours' element={<Misdemeanours />} />
        <Route path='misdemeanours/:amount' element={<Misdemeanours />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
