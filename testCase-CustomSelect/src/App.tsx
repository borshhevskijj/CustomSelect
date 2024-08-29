import React from "react";
import "./App.css";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
// import { OptionType } from "./types";
type Options = { label: string; value: string };
const options: Options[] = [
  { label: "Lorem ipsum dolor sit", value: "Lorem ipsum dolor sit" },
  { label: "amet consectetur adipisicing", value: "amet consectetur adipisicing" },
  { label: " Modi ex", value: " Modi ex" },
  { label: "quod minus vitae", value: "quod minus vitae" },
  { label: "architecto", value: "architecto" },
  { label: "labore quibusdam", value: "labore quibusdam" },
  { label: "maxime natus", value: "maxime natus" },
  { label: "veniam deleniti", value: "veniam deleniti" },
  { label: "itaque saepe?", value: "itaque saepe?" },
  {
    label: "Voluptatum praesentium beatae adipisci, facilis perferendis minima iste",
    value: "Voluptatum praesentium beatae adipisci, facilis perferendis minima iste",
  },
];

// const Label: React.FC<{ option: OptionType; onRemove: () => void }> = ({ onRemove, option }) => {
//   return <div onClick={onRemove}>custom label - {option.label}</div>;
// };

// const Dropdown: React.FC<{
//   options: OptionType[];
//   selectedOptions: OptionType[];
//   onSelect: (option: OptionType) => void;
// }> = ({ onSelect, options, selectedOptions }) => {
//   return (
//     <ul>
//       <h1>options</h1>
//       {options.map((option) => {
//         return <li onClick={() => onSelect(option)}>{option.label}</li>;
//       })}
//       <h1>selected options</h1>
//       {selectedOptions.map((option) => {
//         return <li onClick={() => onSelect(option)}>{option.label}</li>;
//       })}
//     </ul>
//   );
// };v
// const onOptionCreate = () => {
//   alert("created option!");
// };
const optionsStringArr = Object.keys(options);
function App() {
  return (
    <main>
      <div style={{ width: 300 }}>
        <CustomSelect options={optionsStringArr} mode="multiple" />
      </div>
    </main>
  );
}

export default App;
