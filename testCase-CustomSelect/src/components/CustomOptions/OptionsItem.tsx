import React from "react";
import { onRemove, onSelect, OptionType } from "../../types";
import checked from "../../assets/icons/checked.svg";
import { checkedOption } from "../../helpers/typeChecker";
interface OptionsItemProps {
  option: OptionType;
  isSelected: boolean;
  handleSelect: onSelect;
  handleRemove: onRemove;
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
      <div className="optionLabel">{checkedOption(option)}</div>
      {isSelected && (
        <div className="imgWrapper">
          <img src={checked} alt="checked" />
        </div>
      )}
    </li>
  );
};

export default OptionsItem;
