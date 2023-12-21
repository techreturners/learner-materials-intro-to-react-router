import { useEffect, useState } from "react";
import { isError } from '../helpers/is_error';

export const useFetch = <T>(endPoint:string, dataProperty:string | null, 
		setData: React.Dispatch<React.SetStateAction<T>>): boolean => {

	const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint);
				if (response.status === 200) {
					setIsFetching(false);
					const json = await response.json();
					dataProperty !== null? setData(json[dataProperty]): setData(json);
				}
			} catch (error) {
				setIsFetching(false);
                console.log(isError(error) ? error.message : 'Unknown error!');
			}
		};
		if (isFetching) {
			fetchData();
		}
	});
	return isFetching;
  };
  
  export default useFetch;