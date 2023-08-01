// import { useContext } from 'react';
// import { MisdemeanoursContext } from './Misdemeanours';
import { MisdemeanourKind } from '../../types/misdemeanours.types';

interface MisdemeanourProps {
  crime: {
    citizenId: number;
    misdemeanour: MisdemeanourKind;
    date: string;
  };
}

const Misdemeanour: React.FC<MisdemeanourProps> = ({ crime }) => {
  // const data = useContext(MisdemeanoursContext);
  const { citizenId, misdemeanour, date } = crime;
  // console.log('stuff', stuff);
  return (
    <main>
      <h1>hello</h1>
      <p>{citizenId}</p>
      <p>{misdemeanour}</p>
      <p>{date}</p>
    </main>
  );
};

export default Misdemeanour;
