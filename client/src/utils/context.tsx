import { useState, useEffect, createContext } from 'react';
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

  const url = 'http://localhost:8080/api/misdemeanours/';
  const noOfMisdemeanours = 2; // hardcoded for now

  useEffect(() => {
    const getMisdemeanours = async () => {
      try {
        const response = await fetch(url + noOfMisdemeanours);
        const result = await response.json();
        setCrimes(result.misdemeanours);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    };
    getMisdemeanours();
  }, [noOfMisdemeanours]);

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
