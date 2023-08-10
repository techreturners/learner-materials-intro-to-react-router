import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MisdemeanourContext } from '../utils/context';
import Misdemeanour from './Misdemeanour';

const Misdemeanours: React.FC = () => {
  const { crimes, setAmount, loading } = useContext(MisdemeanourContext);

  const { amount } = useParams();
  useEffect(() => {
    amount && setAmount(amount);
  }, []);

  return (
    <>
      {loading && (
        <div className='text-white font-semibold text-center p-2 my-2'>
          Loading...
        </div>
      )}
      <h1>Misdemeanours</h1>
      <ul className='border-2 border-red-100 table'>
        {!loading &&
          crimes &&
          crimes.map((crime) => (
            <li key={crime.citizenId}>
              <Misdemeanour crime={crime} />
            </li>
          ))}
      </ul>
      {!loading && crimes && crimes.length === 0 && <li>No results</li>}
    </>
  );
};

export default Misdemeanours;
