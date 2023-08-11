import { useEffect, useState } from 'react';
import { MisdemeanourKind } from '../../types/misdemeanours.types';
import Loading from './Loading';

interface MisdemeanourProps {
  crime: {
    citizenId: number;
    misdemeanour: MisdemeanourKind;
    date: string;
  };
}

const Misdemeanour: React.FC<MisdemeanourProps> = ({ crime }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const { citizenId, misdemeanour, date } = crime;

  useEffect(() => {
    const getRandomImage = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://picsum.photos/200/200');
        setImgSrc(response.url);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getRandomImage();
  }, []);

  return (
    <>
      {!loading && <Loading />}
      <ul className='bg-yellow-300 flex justify-between'>
        <li>{citizenId}</li>
        <li>{misdemeanour}</li>
        <li>{date}</li>
        <li>
          <img src={imgSrc} />
        </li>
      </ul>
    </>
  );
};

export default Misdemeanour;
