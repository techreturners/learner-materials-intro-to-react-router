import { useContext } from 'react';
import { MisdemeanourContext } from '../utils/context';
import { TMisdemeanour } from '../../types/misdemeanours.types';
import Misdemeanour from './Misdemeanour';
import Loading from './Loading';

interface RenderCrimesProps {
  results: Array<TMisdemeanour>;
}

const RenderCrimes: React.FC<RenderCrimesProps> = ({ results }) => {
  const { loading } = useContext(MisdemeanourContext);
  return (
    <>
      <ul className='border-2 border-red-100 table'>
        {!loading &&
          results &&
          results.map((crime) => (
            <li key={crime.citizenId}>
              <Misdemeanour crime={crime} />
            </li>
          ))}
      </ul>
      {loading && <Loading />}
    </>
  );
};

export default RenderCrimes;
