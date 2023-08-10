import { useContext } from 'react';
import { MisdemeanourContext } from '../utils/context';
import Misdemeanour from './Misdemeanour';

const Misdemeanours: React.FC = () => {
  const { crimes } = useContext(MisdemeanourContext);
  return (
    <>
      <h1>Misdemeanours</h1>
      <ul>
        {crimes &&
          crimes.map((crime) => (
            <li key={crime.citizenId}>
              <Misdemeanour crime={crime} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Misdemeanours;
