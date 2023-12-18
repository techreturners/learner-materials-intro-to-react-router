
interface MisdemeanourProps {
    citizenId: number,
    misdemeanour: string,
    date: string
}

const Misdemeanour : React.FC<MisdemeanourProps> = (props) => {

    return (
    <>
        <div>
        A single Misdemeanour!
        </div>
    </>
    )
    }
export default Misdemeanour;
