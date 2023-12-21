import { useState } from "react";
import { useFetch} from "../../hooks/use_fetch";
import {Misdemeanour} from "../../../types/misdemeanours.types";
import MisdemeanourItem from "./misdemeanour-item";
import ShowLoading from "../loading/show_loading";

interface MisdemeanoursProps {
    url: string;
}

type Misdemeanours  = Array<Misdemeanour>;

const MisdemeanourList : React.FC<MisdemeanoursProps> = ({url}) => {

const [data, setData] = useState<Misdemeanours>();
const [isFetching, setIsFetching] = useState(true);

useFetch(url, "misdemeanours", setData, isFetching, setIsFetching);

return (
<>
    <h2 className = "title">Misdemeanours!</h2>
		{isFetching ? 
		<ShowLoading /> 
		:
    <section className = "container">
        {data && 
        data.map((item: Misdemeanour) => {
        return <MisdemeanourItem key={item.citizenId} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}/>
        })} 
    </section>
}
</>
)
}
export default MisdemeanourList;