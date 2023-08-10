import { BrowserRouter } from 'react-router-dom';
import MisdemeanourContextProvider from './utils/context';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <MisdemeanourContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MisdemeanourContextProvider>
  );
}

export default App;
