interface FilterProps {
  selectedMisdemeanour: string;
  setSelectedMisdemeanour: (v: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedMisdemeanour,
  setSelectedMisdemeanour,
}) => {
  return (
    <>
      <label>
        Pick a misdemeanour:
        <select
          value={selectedMisdemeanour}
          onChange={(e) => setSelectedMisdemeanour(e.target.value)}
        >
          <option value='none'>Please select</option>
          <option value='rudeness'>Mild Public Rudeness = 🤪</option>
          <option value='lift'>Speaking in a Lift = 🗣</option>
          <option value='vegetables'>Not Eating Your Vegetables = 🥗</option>
          <option value='united'>Supporting Manchester United = 😈</option>
        </select>
      </label>
    </>
  );
};

export default Filter;
