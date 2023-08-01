import { createContext, useEffect, useState } from 'react';
// import { getMisdemeanours } from '../utils/fetch';
import Misdemeanour from './Misdemeanour';
import { TMisdemeanour, TMisdemeanours } from '../../types/misdemeanours.types';

// const defaultMisdemeanour: Array<TMisdemeanour> = [
//   { citizenId: 13588, misdemeanour: 'vegetables', date: '7/30/2023' },
// ];

// export const MisdemeanoursContext = createContext(defaultMisdemeanour);

const Misdemeanours: React.FC = () => {
  const [crimes, setCrimes] = useState<TMisdemeanours | null>(null);
  const url = 'http://localhost:8080/api/misdemeanours/';
  const noOfMisdemeanours = 2;

  const getMisdemeanours = async (url: string, noOfMisdemeanours: number) => {
    const response = await fetch(url + noOfMisdemeanours);
    const result = await response.json();
    console.log('result', result);
    setCrimes(result);
  };
  useEffect(() => {
    getMisdemeanours(url, noOfMisdemeanours);

    // getMisdemeanours(url, noOfMisdemeanours).catch(console.error);
  }, []);

  console.log('crimes', crimes?.misdemeanours);
  console.log('isArray crimes', Array.isArray(crimes?.misdemeanours));

  return (
    // <MisdemeanoursContext.Provider value={crimes}>
    <main>
      Misdemeanours
      {crimes && <>HELLO!!</>}
      <ul>
        {crimes.misdemeanours.map((crime) => {
          <p>hello {crime}</p>;
          // <Misdemeanour value={crime} />
        })}
      </ul>
    </main>
    // </MisdemeanoursContext.Provider>
  );
};

export default Misdemeanours;
