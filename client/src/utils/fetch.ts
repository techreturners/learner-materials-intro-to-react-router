import { Misdemeanour } from '../../types/misdemeanours.types';
interface IMisdemeanours {
  misdemeanour: Misdemeanour;
}

export const getMisdemeanours = async (
  url: string,
  noOfMisdemeanours: number
): Promise<IMisdemeanours> => {
  const response = await fetch(url + noOfMisdemeanours);
  const result = await response.json();
  console.log(result);
  return result;
};
