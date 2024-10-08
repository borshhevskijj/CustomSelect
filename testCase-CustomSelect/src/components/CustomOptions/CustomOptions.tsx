import React from "react";
import { CustomDropdown, onOptionCreate, onRemove, onSelect, OptionType } from "../../types/index";
import OptionsItem from "./OptionsItem";
import "./optionsDropdown.css";
import { AddOption } from "./AddOption/AddOption";
import { checkedOption } from "../../helpers/typeChecker";

interface CustomOptionsProps {
  CustomDropdown?: CustomDropdown;
  options: OptionType[];
  selectedOptions: OptionType[];
  search: string;
  closeDropdown: () => void;
  isUnmounting: boolean;
  handleSelect: onSelect;
  handleRemove: onRemove;
  handleCreateOption?: onOptionCreate;
}

const CustomOptions: React.FC<CustomOptionsProps> = ({
  options,
  CustomDropdown,
  selectedOptions,
  handleSelect,
  search,
  closeDropdown,
  isUnmounting,
  handleRemove,
  handleCreateOption,
}) => {
  const selectedOptionsLabels = options.filter((option) => selectedOptions.includes(option));
  const filterOptionsBySearch = options.filter((option) => checkedOption(option).includes(search));

  return (
    <>
      <div className={`options-dropdown ${isUnmounting ? "closing" : ""}`}>
        {CustomDropdown ? (
          <CustomDropdown
            options={options}
            onRemove={handleRemove}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
          />
        ) : (
          <ul>
            {filterOptionsBySearch.length ? (
              filterOptionsBySearch.map((option, index) => {
                const isSelected = selectedOptionsLabels.includes(option);
                return (
                  <OptionsItem
                    handleRemove={handleRemove}
                    isSelected={isSelected}
                    key={index}
                    option={option}
                    handleSelect={handleSelect}
                  />
                );
              })
            ) : handleCreateOption ? (
              <AddOption handleCreateOption={handleCreateOption} search={search} />
            ) : (
              // самому не нравится вложенные тернарники, можно отрефакторить)
              <li className="option">No data 😞😞😞</li>
            )}
          </ul>
        )}
        <div className="close-dropdown-area" onClick={closeDropdown} />
      </div>
    </>
  );
};

export default CustomOptions;
