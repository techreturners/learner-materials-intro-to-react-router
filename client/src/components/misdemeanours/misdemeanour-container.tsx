import { useState } from "react";
import { useFetch} from "../../hooks/use_fetch";
import {Misdemeanour} from "../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import ShowLoading from "../loading/show_loading";
interface MisdemeanoursProps {
    url: string;
}
interface MisdemeanourResponse {
    misdemeanours: Array<Misdemeanour> | null;
}

const Misdemeanours : React.FC<MisdemeanoursProps> = ({url}) => {

const [data, setData] = useState(null);
const response = useFetch<MisdemeanourResponse>(url, data, setData);

console.log(data);

return (
<>
    <h2 className = "title">Misdemeanours!</h2>
		{response.isFetching ? 
		<ShowLoading /> 
		: <p>Here is some information</p>}
    
    <section className = "container">
        {response.data && response.data.misdemeanours &&
        response.data.misdemeanours.map((item: Misdemeanour) => {
        return <MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>
        })} 
    </section>
</>
)
}
export default Misdemeanours;