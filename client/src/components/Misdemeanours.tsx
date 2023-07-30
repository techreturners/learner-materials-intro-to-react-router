import { useEffect, useState } from 'react';

import { getMisdemeanours } from '../utils/fetch';

const Misdemeanours: React.FC = () => {
  const [crimes, setCrimes] = useState({});
  const url = 'http://localhost:8080/api/misdemeanours/';
  const noOfMisdemeanours = 2;

  useEffect(() => {
    const data = getMisdemeanours(url, noOfMisdemeanours);
    setCrimes(data);
  }, []);

  return (
    <main>
      Misdemeanours
      {crimes && <p>we got crimes</p>}
    </main>
  );
};

export default Misdemeanours;
