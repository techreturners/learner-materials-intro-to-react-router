import { useEffect } from "react";
import { isError } from '../helpers/is_error';

export const useFetch = <T>(endPoint:string, dataProperty:string | null, 
		setData: React.Dispatch<React.SetStateAction<T>>,
		isFetching: boolean, setIsFetching: React.Dispatch<React.SetStateAction<boolean>>)=> {

    useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint);
                setIsFetching(false);
				if (response.status === 200) {
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
  };
  
  export default useFetch;