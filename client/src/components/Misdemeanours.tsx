import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MisdemeanourContext } from '../utils/context';
// import Misdemeanour from './Misdemeanour';
import { TMisdemeanour } from '../../types/misdemeanours.types';
import Filter from './Filter';
import RenderCrimes from './RenderCrimes';

const Misdemeanours: React.FC = () => {
  const { crimes, setAmount, loading } = useContext(MisdemeanourContext);
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState('');
  const [filteredCrimes, setFilteredCrimes] = useState<TMisdemeanour[]>([]);

  const { amount } = useParams();

  useEffect(() => {
    amount && setAmount(amount);
    selectedMisdemeanour !== '' &&
      setFilteredCrimes(
        crimes.filter((crime) => crime.misdemeanour === selectedMisdemeanour)
      );
  }, [selectedMisdemeanour]);

  return (
    <>
      <Filter
        selectedMisdemeanour={selectedMisdemeanour}
        setSelectedMisdemeanour={setSelectedMisdemeanour}
      />
      <h1>Misdemeanours</h1>
      {loading && (
        <div className='text-white font-semibold text-center p-2 my-2'>
          Loading...
        </div>
      )}
      <RenderCrimes crimes={crimes} filteredCrimes={filteredCrimes} />
      {!loading && crimes && crimes.length === 0 && <li>No results</li>}
    </>
  );
};

export default Misdemeanours;
