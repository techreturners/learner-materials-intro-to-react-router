import { useFetch} from "../../hooks/use_fetch";
import Misdemeanour from "./misdemeanour";

interface MisdemeanoursProps {
    url: string;
}
interface Misdemeanour {
    citizenId: number,
    misdemeanour: string,
    date: string
}

interface MisdemeanourResponse {
    misdemeanours: Array<Misdemeanour>
}

const Misdemeanours : React.FC<MisdemeanoursProps> = ({url}) => {

const response = useFetch<MisdemeanourResponse>(url);
console.log(response.data?.misdemeanours);
return (
<>
    <section className = "container">
    <h2>Misdemeanours!</h2>
		{response.isFetching ? 
		<p>Fetching...</p> 
		: <p>Misdemeanours:</p>}
        
		<div className = "container">
        {response.data && response.data.misdemeanours &&
        response.data.misdemeanours.map((item: Misdemeanour) => {
        return <Misdemeanour key={item.citizenId} id={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>
        })} 
		</div>
    </section>
</>
)
}
export default Misdemeanours;