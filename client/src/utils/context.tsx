import { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMisdemeanour } from '../../types/misdemeanours.types';

type MisdemeanourContextType = {
  crimes: TMisdemeanour[];
  loading: boolean;
  error: string;
};

type MisdemeanourContextProviderPropsType = {
  children: React.ReactNode[] | React.ReactNode;
};

export const MisdemeanourContext = createContext<MisdemeanourContextType>({
  crimes: [],
  loading: false,
  error: '',
});

const MisdemeanourContextProvider = ({
  children,
}: MisdemeanourContextProviderPropsType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [crimes, setCrimes] = useState<TMisdemeanour[]>([]);

  const { amount } = useParams();

  // const url = `http://localhost:8080/api/misdemeanours/${amount}`;
  const url = `http://localhost:8080/api/misdemeanours/3`;

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
      }}
    >
      {children}
    </MisdemeanourContext.Provider>
  );
};

export default MisdemeanourContextProvider;
