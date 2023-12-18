export interface MisdemeanourProps {
    citizenId: number,
	misdemeanour: string,
    date: string
}

const Misdemeanour : React.FC<MisdemeanourProps> = ({citizenId, misdemeanour, date}) => {

    return (
    <>
        <div>
        A single Misdemeanour!
        <p>Citizen Id: {citizenId}</p>
        <p>Misdemeanour: {misdemeanour}</p>
        <p>Date: {date}</p>
        </div>
    </>
    )
    }
export default Misdemeanour;
