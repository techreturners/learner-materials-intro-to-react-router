import { useContext } from 'react';
import { MisdemeanoursContext } from './Misdemeanours';
import { MisdemeanourKind } from '../../types/misdemeanours.types';

interface MisdemeanourProps {
  crime: {
    citizenId: number;
    misdemeanour: MisdemeanourKind;
    date: string;
  };
}

const Misdemeanour: React.FC<MisdemeanourProps> = () => {
  const crime = useContext(MisdemeanoursContext);

  console.log('crime', crime);
  const { citizenId, misdemeanour, date } = crime;
  return (
    <main>
      <h2>Misdemeanour</h2>
      <p>{citizenId}</p>
      <p>{misdemeanour}</p>
      <p>{date}</p>
    </main>
  );
};

export default Misdemeanour;
