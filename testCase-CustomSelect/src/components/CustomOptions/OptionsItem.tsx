import React from "react";
import { OptionType } from "../../types";
import checked from "../../assets/icons/checked.svg";
interface OptionsItemProps {
  handleSelect: (option: OptionType) => void;
  option: OptionType;
  isSelected: boolean;
  handleRemove: (option: OptionType) => void;
}
const OptionsItem: React.FC<OptionsItemProps> = ({ handleRemove, handleSelect, option, isSelected }) => {
  const clickHandler = () => {
    if (isSelected) {
      handleRemove(option);
    } else {
      handleSelect(option);
    }
  };
  const className = isSelected ? "selected" : "";
  return (
    <li className={`option ${className}`} onClick={clickHandler}>
      <div className="optionLabel">{option.label}</div>
      {isSelected && (
        <div className="imgWrapper">
          <img src={checked} alt="checked" />
        </div>
      )}
    </li>
  );
};

export default OptionsItem;
