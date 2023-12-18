export interface MisdemeanourProps {
    citizenId: number,
	misdemeanour: string,
    date: string
}

const Misdemeanour : React.FC<MisdemeanourProps> = ({citizenId, misdemeanour, date}) => {

    return (
    <>
        <div className = "cell">Citizen Id: {citizenId}</div>
        <div className = "cell">Misdemeanour: {misdemeanour}</div>
        <div className = "cell">Date: {date}</div>
        <div className = "cell">Images goes here</div>
    </>
    )
    }
export default Misdemeanour;
