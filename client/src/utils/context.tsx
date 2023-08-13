import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { TMisdemeanour } from '../../types/misdemeanours.types';

type MisdemeanourContextType = {
  crimes: TMisdemeanour[];
  loading: boolean;
  error: string;
  setAmount: Dispatch<SetStateAction<string>>;
};

type MisdemeanourContextProviderPropsType = {
  children: React.ReactNode[] | React.ReactNode;
};

export const MisdemeanourContext = createContext<MisdemeanourContextType>({
  crimes: [],
  loading: false,
  error: '',
  setAmount: () => {},
});

const MisdemeanourContextProvider = ({
  children,
}: MisdemeanourContextProviderPropsType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [crimes, setCrimes] = useState<TMisdemeanour[]>([]);
  const [amount, setAmount] = useState('');

  const url = `http://localhost:8080/api/misdemeanours/${amount}`;

  useEffect(() => {
    const getMisdemeanours = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setCrimes(result.misdemeanours);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    };
    getMisdemeanours();
  }, [amount]);

  return (
    <MisdemeanourContext.Provider
      value={{
        crimes,
        loading,
        error,
        setAmount,
      }}
    >
      {children}
    </MisdemeanourContext.Provider>
  );
};

export default MisdemeanourContextProvider;
