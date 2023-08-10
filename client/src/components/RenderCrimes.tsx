import { useContext } from 'react';
import { MisdemeanourContext } from '../utils/context';
import { TMisdemeanour } from '../../types/misdemeanours.types';
import Misdemeanour from './Misdemeanour';

interface RenderCrimesProps {
  crimes: Array<TMisdemeanour>;
  filteredCrimes: Array<TMisdemeanour>;
}

const RenderCrimes: React.FC<RenderCrimesProps> = ({
  crimes,
  filteredCrimes,
}) => {
  const { loading } = useContext(MisdemeanourContext);
  const results = filteredCrimes.length !== 0 ? filteredCrimes : crimes;
  return (
    <ul className='border-2 border-red-100 table'>
      {!loading &&
        results &&
        results.map((crime) => (
          <li key={crime.citizenId}>
            <Misdemeanour crime={crime} />
          </li>
        ))}
    </ul>
  );
};

export default RenderCrimes;
