import { OptionType } from "./types";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import "./App.css";

const options: OptionType[] = [
  { label: "Lorem ipsum dolor sit", value: "Lorem ipsum dolor sit" },
  { label: "amet consectetur adipisicing", value: "amet consectetur adipisicing" },
  { label: " Modi ex", value: " Modi ex" },
  { label: "quod minus vitae", value: "quod minus vitae" },
  { label: "architecto", value: "architecto" },
  { label: "labore quibusdam", value: "labore quibusdam" },
  { label: "maxime natus", value: "maxime natus" },
  { label: "itaque saepe?", value: "veniam deleniti" },
  { label: "itaque saepe?", value: "itaque saepe?" },
  {
    label: "Voluptatum praesentium beatae adipisci, facilis perferendis minima iste",
    value: "Voluptatum praesentium beatae adipisci, facilis perferendis minima iste",
  },
];
const optionsStringArr = Object.values(options);
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
