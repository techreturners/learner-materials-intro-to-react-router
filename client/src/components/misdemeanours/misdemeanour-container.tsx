import { useFetch} from "../../hooks/use_fetch";
import {Misdemeanour} from "../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
interface MisdemeanoursProps {
    url: string;
}
interface MisdemeanourResponse {
    misdemeanours: Array<Misdemeanour>
}

const Misdemeanours : React.FC<MisdemeanoursProps> = ({url}) => {

const response = useFetch<MisdemeanourResponse>(url);
return (
<>
    <h2 className = "title">Misdemeanours!</h2>
		{response.isFetching ? 
		<p>Fetching...</p> 
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