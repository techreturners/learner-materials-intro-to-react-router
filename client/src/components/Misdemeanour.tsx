import { MisdemeanourKind } from '../../types/misdemeanours.types';

interface MisdemeanourProps {
  crime: {
    citizenId: number;
    misdemeanour: MisdemeanourKind;
    date: string;
  };
}

const Misdemeanour: React.FC<MisdemeanourProps> = ({ crime }) => {
  const { citizenId, misdemeanour, date } = crime;
  return (
    <ul className='bg-yellow-300 flex justify-between'>
      <li>{citizenId}</li>
      <li>{misdemeanour}</li>
      <li>{date}</li>
    </ul>
  );
};

export default Misdemeanour;
