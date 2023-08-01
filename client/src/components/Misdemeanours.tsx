import { createContext, useEffect, useState } from 'react';
// import { getMisdemeanours } from '../utils/fetch';
import Misdemeanour from './Misdemeanour';
import { TMisdemeanour, TMisdemeanours } from '../../types/misdemeanours.types';

// const defaultMisdemeanour: Array<TMisdemeanour> = [
//   { citizenId: 13588, misdemeanour: 'vegetables', date: '7/30/2023' },
// ];

// export const MisdemeanoursContext = createContext(defaultMisdemeanour);

const Misdemeanours: React.FC = () => {
  const [crimes, setCrimes] = useState<Array<TMisdemeanour> | null>(null);
  const url = 'http://localhost:8080/api/misdemeanours/';
  const noOfMisdemeanours = 2;

  const getMisdemeanours = async (url: string, noOfMisdemeanours: number) => {
    const response = await fetch(url + noOfMisdemeanours);
    const result = await response.json();
    setCrimes(result.misdemeanours);
  };
  useEffect(() => {
    getMisdemeanours(url, noOfMisdemeanours);
  }, []);

  return (
    // <MisdemeanoursContext.Provider value={crimes}>
    <main>
      <h1>Misdemeanours</h1>
      <ul>
        {crimes &&
          crimes.map((crime) => (
            <li>
              {/* {crime.citizenId} */}
              <Misdemeanour crime={crime} />
            </li>
          ))}
      </ul>
    </main>
    // </MisdemeanoursContext.Provider>
  );
};

export default Misdemeanours;
